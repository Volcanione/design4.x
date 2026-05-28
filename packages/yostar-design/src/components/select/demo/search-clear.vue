<template>
  <yo-space wrap>
    <yo-select
      v-model:value="searchValue"
      show-search
      placeholder="可搜索"
      :filter-option="filterOption"
      :options="options"
    />
    <yo-select v-model:value="clearValue" allow-clear placeholder="支持清除" :options="options" />
  </yo-space>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const searchValue = ref<string>();
const clearValue = ref<string>('shanghai');

const options = [
  { label: '上海', value: 'shanghai' },
  { label: '北京', value: 'beijing' },
  { label: '广州', value: 'guangzhou' },
  { label: '深圳', value: 'shenzhen' },
];

function filterOption(input: string, option?: { label?: string }) {
  return String(option?.label ?? '').toLowerCase().includes(input.toLowerCase());
}
</script>

<style scoped>
:deep(.yo-select) {
  min-width: 180px;
}
</style>
