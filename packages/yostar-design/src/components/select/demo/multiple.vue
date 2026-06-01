<template>
  <yo-space direction="vertical" class="select-demo-stack">
    <yo-select
      v-model:value="multipleValue"
      mode="multiple"
      allow-clear
      placeholder="默认多选"
      :options="options"
    />
    <yo-select
      v-model:value="smallValue"
      size="small"
      mode="multiple"
      placeholder="小尺寸多选"
      :options="options"
    />
    <yo-select
      v-model:value="largeValue"
      size="large"
      mode="multiple"
      placeholder="大尺寸多选"
      :options="options"
    />
    <yo-select v-model:value="tagsValue" mode="tags" placeholder="标签模式" :options="options" />
  </yo-space>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const multipleValue = ref<string[]>([]);
const smallValue = ref<string[]>(['project']);
const largeValue = ref<string[]>(['operation']);
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
