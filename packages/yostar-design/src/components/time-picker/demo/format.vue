<template>
  <yo-space>
    <yo-time-picker v-model:value="minuteValue" format="HH:mm" />
    <yo-time-picker v-model:value="hourValue" format="HH" />
    <yo-time-picker v-model:value="periodValue" use12-hours format="h:mm:ss A" />
  </yo-space>
</template>

<script setup lang="ts">
import dayjs from 'dayjs';
import { ref } from 'vue';

const minuteValue = ref(dayjs('2026-06-01 12:30:00'));
const hourValue = ref(dayjs('2026-06-01 12:00:00'));
const periodValue = ref(dayjs('2026-06-01 12:30:00'));
</script>
