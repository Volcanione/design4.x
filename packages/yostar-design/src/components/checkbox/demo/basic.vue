<template>
  <yo-checkbox v-model:checked="checked">复选项</yo-checkbox>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const checked = ref(true);
</script>
