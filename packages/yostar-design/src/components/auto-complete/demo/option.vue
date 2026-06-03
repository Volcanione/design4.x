<template>
  <yo-auto-complete v-model:value="value" class="auto-complete-demo-item" placeholder="选择环境">
    <yo-auto-complete-option value="dev">开发环境</yo-auto-complete-option>
    <yo-auto-complete-option value="test">测试环境</yo-auto-complete-option>
    <yo-auto-complete-option value="prod">生产环境</yo-auto-complete-option>
  </yo-auto-complete>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref('');
</script>

<style scoped>
.auto-complete-demo-item {
  width: min(280px, 100%);
}
</style>
