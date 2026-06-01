<template>
  <yo-space>
    <yo-date-picker v-model:value="value" />
    <yo-date-picker placeholder="请选择日期" />
  </yo-space>
</template>

<script setup lang="ts">
import dayjs from 'dayjs';
import { ref } from 'vue';

const value = ref(dayjs('2026-06-01'));
</script>
