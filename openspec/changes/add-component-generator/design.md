# Design: add-component-generator

## 上下文

当前公开组件需要在源码、构建配置、resolver、exports、样式和文档中手动维护。三个组件时还可以接受，但如果要扩展为完整的 AntDV-based 组件库，这种方式不可持续。

## 设计决策

新增一个生成器命令，接收组件名和 AntDV 源组件名。

未来命令示例：

```bash
pnpm --filter @yo-star/yostar-design generate:component table --antd Table
```

生成器需要完成：

1. 创建 `src/components/<name>/`。
2. 创建 `<PascalName>.tsx`、`index.ts`、`style/index.less`、`index.zh-CN.md` 和 `demo/basic.vue`。
3. 更新 `src/components/index.ts`。
4. 更新 `src/global.ts`。
5. 更新 `src/resolver.ts`。
6. 更新 `vite.config.subpaths.ts`。
7. 更新 `package.json` exports。
8. 更新 `scripts/copy-styles.mjs`。

## 备选方案

### 运行时扫描 AntDV

不采用。该方案会把过多 AntDV 内容拉进依赖图，削弱 tree-shaking，并且无法提供可靠的逐组件类型。

### 继续手动维护

不采用。随着组件数量增加，手动维护非常容易遗漏导出、resolver 或样式入口。

## 风险

- JSON 和 TS 文件改写必须保持格式稳定。
- 生成器不能覆盖已有自定义组件实现。
- `Table.Column` 这类带嵌套 API 的 AntDV 组件需要单独设计。

