<template>
  <yo-space>
    <yo-input-number v-model:value="value" :controls="true" />
    <yo-input-number v-model:value="value" :controls="false" />
  </yo-space>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref(8);
</script>
