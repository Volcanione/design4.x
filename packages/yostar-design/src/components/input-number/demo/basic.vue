<template>
  <yo-space direction="vertical">
    <yo-input-number v-model:value="value" :min="0" :max="100" />
    <yo-input-number v-model:value="precisionValue" :min="0" :max="10" :step="0.1" :precision="1" />
  </yo-space>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref(12);
const precisionValue = ref(1.5);
</script>
