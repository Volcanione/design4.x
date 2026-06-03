<template>
  <yo-auto-complete
    v-model:value="value"
    class="auto-complete-demo-item"
    placeholder="请输入关键词"
    :options="options"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref('');

const options = [
  { value: 'Shanghai' },
  { value: 'Beijing' },
  { value: 'Guangzhou' },
  { value: 'Shenzhen' },
];
</script>

<style scoped>
.auto-complete-demo-item {
  width: min(280px, 100%);
}
</style>
