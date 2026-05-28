<template>
  <yo-space wrap>
    <yo-select size="small" placeholder="Small" :options="options" />
    <yo-select placeholder="Middle" :options="options" />
    <yo-select size="large" placeholder="Large" :options="options" />
  </yo-space>
</template>

<script setup lang="ts">
const options = [
  { label: '上海', value: 'shanghai' },
  { label: '北京', value: 'beijing' },
  { label: '广州', value: 'guangzhou' },
  { label: '深圳', value: 'shenzhen' },
];
</script>

<style scoped>
:deep(.yo-select) {
  min-width: 180px;
}
</style>
