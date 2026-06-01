<template>
  <yo-checkbox-group v-model:value="value" class="checkbox-nested-demo">
    <yo-checkbox value="read">查看</yo-checkbox>
    <yo-checkbox value="edit">编辑</yo-checkbox>
    <yo-checkbox value="publish" disabled>发布</yo-checkbox>
  </yo-checkbox-group>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref(['read']);
</script>

<style scoped>
.checkbox-nested-demo {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;
}
</style>
