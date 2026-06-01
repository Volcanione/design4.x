<template>
  <yo-select v-model:value="value" class="select-demo-item" placeholder="请选择">
    <yo-select-option value="shanghai">上海</yo-select-option>
    <yo-select-option value="beijing">北京</yo-select-option>
    <yo-select-option value="guangzhou" disabled>广州</yo-select-option>
    <yo-select-option value="shenzhen">深圳</yo-select-option>
  </yo-select>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref<string>();
</script>

<style scoped>
.select-demo-item {
  min-width: 180px;
}
</style>
