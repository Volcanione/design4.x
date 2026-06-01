<template>
  <yo-switch v-model:checked="checked" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const checked = ref(true);
</script>
