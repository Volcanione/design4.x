# Yostar Design OpenSpec 使用指南

这里是 Yostar Design 4.x 的轻量 OpenSpec 风格规范驱动目录。

它的目标不是替代代码实现，而是在实现前先固定“为什么改、改什么、怎么验收”，避免组件库后续扩展时散落修改、口径不一致。

## 阅读顺序

1. `docs/TECHNICAL_SPEC.md`
2. `openspec/project.md`
3. `openspec/specs/*/spec.md`
4. `openspec/changes/<change-id>/proposal.md`
5. `openspec/changes/<change-id>/tasks.md`

## 目录结构

```text
openspec/
  project.md
  specs/
    component-authoring/spec.md
    on-demand-imports/spec.md
    preview-site/spec.md
    build-and-release/spec.md
  changes/
    TEMPLATE/
    add-component-generator/
```

## 工作流

1. 新功能、破坏性变更、构建方式调整，都先复制 `openspec/changes/TEMPLATE` 到 `openspec/changes/<change-id>`。
2. 填写 `proposal.md`，说明背景、目标和影响范围。
3. 如果变更影响架构、构建、resolver、exports 或消费方式，补充 `design.md`。
4. 填写 `tasks.md`，把实现步骤拆成可检查任务。
5. 在 `specs/<capability>/spec.md` 下补充 spec delta。
6. 实现代码。
7. 运行验证命令。
8. 变更稳定后，把 spec delta 合并回 `openspec/specs/`。

## Change ID 命名

使用 kebab-case：

```text
add-component-generator
add-table-component
change-style-build-output
fix-resolver-types
```

## 验证命令

组件库：

```bash
pnpm run typecheck
pnpm run build
```

如果影响使用方引入方式，还需要验证消费 demo：

```bash
cd D:\yostar\test-yostar-design
pnpm run typecheck
pnpm run build
```

