<template>
  <yo-space>
    <yo-date-picker v-model:value="value" show-time timezone="UTC+8" />
    <yo-date-picker :value="value" show-time timezone="UTC+9" />
    <yo-date-picker :value="value" show-time timezone="local" />
  </yo-space>
</template>

<script setup lang="ts">
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { ref } from 'vue';

dayjs.extend(utc);

const value = ref(dayjs.utc('2026-06-01T09:00:00Z'));
</script>
