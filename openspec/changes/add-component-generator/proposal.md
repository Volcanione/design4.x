# Change Proposal: add-component-generator

## 摘要

为 Yostar Design 4.x 增加组件生成器。生成器用于创建组件源码文件，并同步更新按需引入、resolver、全局组件类型、预览站文档和构建所需的静态入口。

## 背景与动机

当前组件模型已经可用，但新增组件时需要手动修改多个文件。随着后续从 Ant Design Vue 映射更多 `yo-*` 组件，手动维护容易遗漏 resolver、exports、样式入口或全局类型声明。

## 范围

包含：

- 生成组件目录结构。
- 更新组件聚合导出。
- 更新全局组件类型。
- 更新 resolver 映射。
- 更新 subpath build entries。
- 更新 package exports。
- 更新样式复制规则。
- 生成初始文档和 demo。

不包含：

- 一次性自动包装所有 AntDV 组件。
- 从 TypeScript 类型自动生成 Attributes 文档。
- 发布流程。

## 影响

涉及文件：

- `packages/yostar-design/src/components`
- `packages/yostar-design/src/components/index.ts`
- `packages/yostar-design/src/global.ts`
- `packages/yostar-design/src/resolver.ts`
- `packages/yostar-design/vite.config.subpaths.ts`
- `packages/yostar-design/package.json`
- `packages/yostar-design/scripts/copy-styles.mjs`
- 如路由元信息需要扩展，可能影响 `apps/site/scripts/generate-routes.ts`

## 验证方式

```bash
pnpm run typecheck
pnpm run build
```

如果生成的组件会被消费 demo 使用：

```bash
cd D:\yostar\test-yostar-design
pnpm run typecheck
pnpm run build
```

