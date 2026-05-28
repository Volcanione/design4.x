<template>
  <yo-space direction="vertical" class="select-demo-stack">
    <yo-select
      v-model:value="multipleValue"
      mode="multiple"
      allow-clear
      placeholder="多选"
      :options="options"
    />
    <yo-select v-model:value="tagsValue" mode="tags" placeholder="标签模式" :options="options" />
  </yo-space>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const multipleValue = ref<string[]>([]);
const tagsValue = ref<string[]>(['project']);

const options = [
  { label: '项目管理', value: 'project' },
  { label: '数据分析', value: 'analytics' },
  { label: '运营配置', value: 'operation' },
  { label: '权限管理', value: 'permission' },
];
</script>

<style scoped>
.select-demo-stack {
  width: min(420px, 100%);
}

.select-demo-stack :deep(.ant-space-item),
.select-demo-stack :deep(.yo-select) {
  width: 100%;
}
</style>
