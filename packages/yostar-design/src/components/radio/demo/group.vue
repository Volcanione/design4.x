<template>
  <yo-radio-group v-model:value="value" :options="options" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref('console');

const options = [
  { label: '控制台', value: 'console' },
  { label: '运营后台', value: 'operation' },
  { label: '数据看板', value: 'dashboard' },
];
</script>
