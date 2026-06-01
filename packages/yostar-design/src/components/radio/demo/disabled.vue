<template>
  <yo-space direction="vertical">
    <yo-radio disabled checked>默认禁用</yo-radio>
    <yo-radio disabled checked disabled-variant="strong">强文字禁用</yo-radio>
    <yo-radio-group disabled disabled-variant="strong" value="console" :options="options" />
  </yo-space>
</template>

<script setup lang="ts">
const options = [
  { label: '控制台', value: 'console' },
  { label: '运营后台', value: 'operation' },
];
</script>
