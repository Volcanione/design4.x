<template>
  <yo-checkbox-group v-model:value="value" :options="options" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref(['read']);

const options = [
  { label: '查看', value: 'read' },
  { label: '编辑', value: 'edit' },
  { label: '发布', value: 'publish' },
];
</script>
