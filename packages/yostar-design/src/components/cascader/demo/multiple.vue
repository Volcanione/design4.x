<template>
  <yo-space direction="vertical" class="cascader-demo-stack">
    <yo-cascader v-model:value="value" multiple allow-clear placeholder="多选路径" :options="options" />
    <yo-cascader
      v-model:value="largeValue"
      multiple
      size="large"
      placeholder="大尺寸多选"
      :options="options"
      :max-tag-count="2"
    />
  </yo-space>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref<string[][]>([
  ['permission', 'role', 'admin'],
  ['content', 'article', 'publish'],
]);
const largeValue = ref<string[][]>([['permission', 'account', 'create']]);

const options = [
  {
    value: 'permission',
    label: '权限管理',
    children: [
      {
        value: 'role',
        label: '角色',
        children: [
          { value: 'admin', label: '管理员' },
          { value: 'editor', label: '编辑者' },
        ],
      },
      {
        value: 'account',
        label: '账号',
        children: [
          { value: 'create', label: '创建账号' },
          { value: 'freeze', label: '冻结账号' },
        ],
      },
    ],
  },
  {
    value: 'content',
    label: '内容管理',
    children: [
      {
        value: 'article',
        label: '文章',
        children: [
          { value: 'draft', label: '草稿' },
          { value: 'publish', label: '发布' },
        ],
      },
    ],
  },
];
</script>

<style scoped>
.cascader-demo-stack {
  width: min(420px, 100%);
}

.cascader-demo-stack :deep(.ant-space-item),
.cascader-demo-stack :deep(.yo-cascader) {
  width: 100%;
}
</style>
