<template>
  <yo-space direction="vertical" class="cascader-demo-stack">
    <yo-cascader v-model:value="value" disabled placeholder="默认禁用" :options="options" />
    <yo-cascader v-model:value="strongValue" disabled disabled-variant="strong" :options="options" />
  </yo-space>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref<string[]>(['project', 'archive']);
const strongValue = ref<string[]>(['project', 'publish']);

const options = [
  {
    value: 'project',
    label: '项目',
    children: [
      { value: 'archive', label: '归档' },
      { value: 'publish', label: '发布' },
    ],
  },
];
</script>

<style scoped>
.cascader-demo-stack {
  width: min(320px, 100%);
}

.cascader-demo-stack :deep(.ant-space-item),
.cascader-demo-stack :deep(.yo-cascader) {
  width: 100%;
}
</style>
