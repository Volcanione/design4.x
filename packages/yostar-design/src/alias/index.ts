import * as Antd from 'ant-design-vue';
import type { App, Component } from 'vue';

type AnyRecord = Record<string, unknown>;

export interface YoAntdAliasOptions {
  /**
   * PascalCase component prefix. "Yo" maps AButton to YoButton,
   * which Vue templates can use as <yo-button>.
   */
  prefix?: string;
  /**
   * Register original Ant Design Vue names such as AButton at the same time.
   */
  includeOriginal?: boolean;
  /**
   * Skip alias registration for selected PascalCase names.
   */
  excludes?: string[];
}

const IGNORED_EXPORTS = new Set(['default', 'version', 'theme', 'message', 'notification']);
const MAX_NESTED_DEPTH = 3;

export function installAntdAliases(app: App, options: YoAntdAliasOptions = {}) {
  const prefix = options.prefix ?? 'Yo';
  const visited = new WeakSet<object>();
  const registered = new Set<string>();
  const excludes = new Set(options.excludes ?? []);

  Object.entries(Antd).forEach(([exportName, value]) => {
    if (IGNORED_EXPORTS.has(exportName)) {
      return;
    }

    visitExport(app, value, exportName, prefix, options, excludes, visited, registered, 0);
  });
}

function visitExport(
  app: App,
  value: unknown,
  exportName: string,
  prefix: string,
  options: YoAntdAliasOptions,
  excludes: Set<string>,
  visited: WeakSet<object>,
  registered: Set<string>,
  depth: number,
) {
  if (!isObjectLike(value) || visited.has(value)) {
    return;
  }
  visited.add(value);

  registerAlias(app, value, exportName, prefix, options, excludes, registered);

  if (depth >= MAX_NESTED_DEPTH || typeof value !== 'object' || value === null) {
    return;
  }

  Object.entries(value).forEach(([nestedName, nestedValue]) => {
    if (nestedName !== 'install') {
      visitExport(app, nestedValue, nestedName, prefix, options, excludes, visited, registered, depth + 1);
    }
  });
}

function registerAlias(
  app: App,
  value: object,
  exportName: string,
  prefix: string,
  options: YoAntdAliasOptions,
  excludes: Set<string>,
  registered: Set<string>,
) {
  if (!isComponentLike(value)) {
    return;
  }

  const originalName = getOriginalComponentName(value, exportName);
  if (!originalName) {
    return;
  }

  const aliasName = `${prefix}${originalName.slice(1)}`;
  if (excludes.has(aliasName) || registered.has(aliasName) || app.component(aliasName)) {
    return;
  }

  app.component(aliasName, value as Component);
  registered.add(aliasName);

  if (options.includeOriginal && !app.component(originalName)) {
    app.component(originalName, value as Component);
  }
}

function getOriginalComponentName(value: object, exportName: string) {
  const name = (value as AnyRecord).name;
  if (typeof name === 'string' && /^A[A-Z]/.test(name)) {
    return name;
  }

  if (/^[A-Z]/.test(exportName)) {
    return `A${exportName}`;
  }

  return null;
}

function isObjectLike(value: unknown): value is object {
  return (typeof value === 'object' && value !== null) || typeof value === 'function';
}

function isComponentLike(value: object) {
  const record = value as AnyRecord;

  return (
    typeof record.install === 'function' ||
    typeof record.setup === 'function' ||
    typeof record.render === 'function' ||
    typeof record.name === 'string'
  );
}
