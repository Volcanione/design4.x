<template>
  <yo-radio v-model:checked="checked">单选项</yo-radio>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const checked = ref(true);
</script>
