<template>
  <yo-space>
    <yo-input-number v-model:value="value" size="small" />
    <yo-input-number v-model:value="value" />
    <yo-input-number v-model:value="value" size="large" />
  </yo-space>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref(32);
</script>
