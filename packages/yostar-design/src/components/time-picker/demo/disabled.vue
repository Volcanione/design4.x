<template>
  <yo-space>
    <yo-time-picker disabled :value="value" />
    <yo-time-picker disabled disabled-variant="strong" :value="value" />
  </yo-space>
</template>

<script setup lang="ts">
import dayjs from 'dayjs';

const value = dayjs('2026-06-01 12:00:00');
</script>
