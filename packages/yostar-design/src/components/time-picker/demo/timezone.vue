<template>
  <yo-space>
    <yo-time-picker v-model:value="value" format="HH:mm:ss" timezone="UTC+8" />
    <yo-time-picker :value="value" format="HH:mm:ss" timezone="UTC+9" />
    <yo-time-picker :value="value" format="HH:mm:ss" timezone="local" />
  </yo-space>
</template>

<script setup lang="ts">
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { ref } from 'vue';

dayjs.extend(utc);

const value = ref(dayjs.utc('2026-06-01T09:00:00Z'));
</script>
