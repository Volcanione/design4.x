<template>
  <yo-space direction="vertical" class="cascader-demo-stack">
    <yo-cascader v-model:value="smallValue" size="small" placeholder="小尺寸" :options="options" />
    <yo-cascader v-model:value="middleValue" placeholder="默认尺寸" :options="options" />
    <yo-cascader v-model:value="largeValue" size="large" placeholder="大尺寸" :options="options" />
  </yo-space>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const smallValue = ref<string[]>();
const middleValue = ref<string[]>(['product', 'game']);
const largeValue = ref<string[]>();

const options = [
  {
    value: 'product',
    label: '产品',
    children: [
      { value: 'game', label: '游戏' },
      { value: 'service', label: '服务' },
    ],
  },
  {
    value: 'operation',
    label: '运营',
    children: [
      { value: 'event', label: '活动' },
      { value: 'notice', label: '公告' },
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
