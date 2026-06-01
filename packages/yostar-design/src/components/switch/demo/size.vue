<template>
  <yo-space>
    <yo-switch v-model:checked="checked" />
    <yo-switch v-model:checked="checked" size="small" />
  </yo-space>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const checked = ref(true);
</script>
