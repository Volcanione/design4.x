<template>
  <yo-space direction="vertical" class="cascader-demo-stack">
    <yo-cascader v-model:value="value" show-search allow-clear placeholder="支持搜索和清除" :options="options" />
    <yo-cascader v-model:value="changeValue" change-on-select placeholder="可选择任意一级" :options="options" />
  </yo-space>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref<string[]>();
const changeValue = ref<string[]>();

const options = [
  {
    value: 'asia',
    label: '亚洲',
    children: [
      {
        value: 'china',
        label: '中国',
        children: [
          { value: 'shanghai', label: '上海' },
          { value: 'beijing', label: '北京' },
        ],
      },
      {
        value: 'japan',
        label: '日本',
        children: [
          { value: 'tokyo', label: '东京' },
          { value: 'osaka', label: '大阪' },
        ],
      },
    ],
  },
  {
    value: 'europe',
    label: '欧洲',
    children: [
      {
        value: 'france',
        label: '法国',
        children: [
          { value: 'paris', label: '巴黎' },
          { value: 'lyon', label: '里昂' },
        ],
      },
    ],
  },
];
</script>

<style scoped>
.cascader-demo-stack {
  width: min(360px, 100%);
}

.cascader-demo-stack :deep(.ant-space-item),
.cascader-demo-stack :deep(.yo-cascader) {
  width: 100%;
}
</style>
