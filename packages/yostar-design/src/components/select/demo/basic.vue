<template>
  <yo-select v-model:value="value" class="select-demo-item" placeholder="请选择" :options="options" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref<string>();

const options = [
  { label: '上海', value: 'shanghai' },
  { label: '北京', value: 'beijing' },
  { label: '广州', value: 'guangzhou' },
  { label: '深圳', value: 'shenzhen' },
];
</script>

<style scoped>
.select-demo-item {
  min-width: 180px;
}
</style>
