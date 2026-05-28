<template>
  <yo-space wrap>
    <yo-select disabled value="shanghai" :options="options" />
    <yo-select disabled disabled-variant="strong" value="beijing" :options="options" />
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
