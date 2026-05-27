# Yostar Design 4.x

Yostar Design 4.x is a Vue 3 component library framework based on Ant Design Vue 4.x.

## Structure

```text
apps/site                 Preview and documentation site
packages/yostar-design    Component library source
```

## Commands

```bash
pnpm install
pnpm dev
pnpm build
pnpm typecheck
```

## Specifications

- Technical specification: `docs/TECHNICAL_SPEC.md`
- Spec-driven workflow: `openspec/README.md`
- Active canonical specs: `openspec/specs/*/spec.md`
- Change proposals: `openspec/changes/*`

## Component Authoring

Each component owns its implementation, style, docs, and demos:

```text
packages/yostar-design/src/components/button/
  Button.tsx
  index.ts
  style/index.less
  index.zh-CN.md
  demo/basic.vue
```

The preview site scans component docs and demos, then generates routes before dev/build.

## Imports

Full install:

```ts
import YostarDesign from '@yo-star/yostar-design';
import '@yo-star/yostar-design/style.css';

app.use(YostarDesign);
```

On-demand install:

```ts
import { YoButton } from '@yo-star/yostar-design/button';
import '@yo-star/yostar-design/button/style.css';

app.use(YoButton);
```

Supported subpath entries now include:

```text
@yo-star/yostar-design/button
@yo-star/yostar-design/config-provider
@yo-star/yostar-design/space
@yo-star/yostar-design/resolver
```

The resolver can be used by `unplugin-vue-components`:

```ts
import { YostarDesignResolver } from '@yo-star/yostar-design/resolver';
```
