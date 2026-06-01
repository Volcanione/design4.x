<template>
  <yo-space direction="vertical">
    <yo-checkbox disabled checked>默认禁用</yo-checkbox>
    <yo-checkbox disabled checked disabled-variant="strong">强文字禁用</yo-checkbox>
    <yo-checkbox-group disabled disabled-variant="strong" :value="['read']" :options="options" />
  </yo-space>
</template>

<script setup lang="ts">
const options = [
  { label: '查看', value: 'read' },
  { label: '编辑', value: 'edit' },
];
</script>
