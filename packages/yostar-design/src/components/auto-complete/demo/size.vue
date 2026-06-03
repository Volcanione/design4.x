<template>
  <yo-space direction="vertical" class="auto-complete-demo-stack">
    <yo-auto-complete v-model:value="smallValue" size="small" placeholder="小尺寸" :options="options" />
    <yo-auto-complete v-model:value="middleValue" placeholder="默认尺寸" :options="options" />
    <yo-auto-complete v-model:value="largeValue" size="large" placeholder="大尺寸" :options="options" />
  </yo-space>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const smallValue = ref('');
const middleValue = ref('运营活动');
const largeValue = ref('');

const options = [
  { value: '项目管理' },
  { value: '运营活动' },
  { value: '数据分析' },
];
</script>

<style scoped>
.auto-complete-demo-stack {
  width: min(320px, 100%);
}

.auto-complete-demo-stack :deep(.ant-space-item),
.auto-complete-demo-stack :deep(.yo-auto-complete) {
  width: 100%;
}
</style>
