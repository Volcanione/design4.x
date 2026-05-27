# 提交范围整理

更新时间：2026-05-27

## 说明

当前目录 `D:\yostar\yostar-design4.x` 还不是 git 仓库，因此这里整理的是“建议提交范围”和“应忽略范围”。初始化 git 后，可按此清单检查。

## 建议提交

### 根目录工程配置

```text
package.json
pnpm-lock.yaml
pnpm-workspace.yaml
.npmrc
.gitignore
tsconfig.base.json
README.md
COMPONENT_LIBRARY_AUDIT.md
```

### 技术规范与规范驱动

```text
docs/TECHNICAL_SPEC.md
docs/COMMIT_SCOPE.md
openspec/**
```

### 组件库源码

```text
packages/yostar-design/package.json
packages/yostar-design/tsconfig.json
packages/yostar-design/tsconfig.build.json
packages/yostar-design/vite.config.ts
packages/yostar-design/vite.config.subpaths.ts
packages/yostar-design/scripts/**
packages/yostar-design/src/**
```

### 预览站源码

```text
apps/site/package.json
apps/site/tsconfig.json
apps/site/vite.config.ts
apps/site/index.html
apps/site/scripts/**
apps/site/src/**
```

注意：`apps/site/src/generated/` 是生成文件，已被忽略，不建议提交。

## 不建议提交，已加入忽略

### 依赖目录

```text
node_modules/
.pnpm-store/
```

### 构建产物

```text
dist/
**/dist/
.vite/
**/.vite/
coverage/
*.tsbuildinfo
```

包括但不限于：

```text
packages/yostar-design/dist/
apps/site/dist/
```

### 生成文件

```text
apps/site/src/generated/
```

该目录由 `apps/site/scripts/generate-routes.ts` 生成。开发和构建脚本已通过 `predev / prebuild / pretypecheck` 自动生成，不需要提交。

### 本地环境、日志和编辑器文件

```text
*.local
.env.local
.env.*.local
*.log
npm-debug.log*
yarn-debug.log*
pnpm-debug.log*
.DS_Store
Thumbs.db
.idea/
.vscode/
.cache/
.turbo/
```

## 不属于组件库仓库的内容

以下目录是外部消费测试项目，不建议提交到组件库仓库：

```text
D:\yostar\test-yostar-design
```

它可以作为本地验证项目存在，但不应放进 `yostar-design4.x` 仓库。

## 初始化 git 后的建议检查命令

```bash
git status --short
git check-ignore -v packages/yostar-design/dist/yostar-design.es.js
git check-ignore -v apps/site/src/generated/routes.ts
```

期望：

- 源码、规范、配置文件出现在 `git status` 中。
- `dist` 和 `apps/site/src/generated/routes.ts` 被 `.gitignore` 命中。

