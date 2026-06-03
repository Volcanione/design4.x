<template>
  <yo-space direction="vertical" class="auto-complete-demo-stack">
    <yo-auto-complete v-model:value="value" disabled placeholder="默认禁用" :options="options" />
    <yo-auto-complete v-model:value="strongValue" disabled disabled-variant="strong" :options="options" />
  </yo-space>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref('');
const strongValue = ref('项目管理');

const options = [{ value: '项目管理' }, { value: '运营活动' }];
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
