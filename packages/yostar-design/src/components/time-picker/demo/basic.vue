<template>
  <yo-space>
    <yo-time-picker v-model:value="value" />
    <yo-time-picker placeholder="请选择时间" />
  </yo-space>
</template>

<script setup lang="ts">
import dayjs from 'dayjs';
import { ref } from 'vue';

const value = ref(dayjs('2026-06-01 12:00:00'));
</script>
