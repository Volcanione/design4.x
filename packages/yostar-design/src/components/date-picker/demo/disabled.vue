<template>
  <yo-space>
    <yo-date-picker disabled :value="value" />
    <yo-date-picker disabled disabled-variant="strong" :value="value" />
  </yo-space>
</template>

<script setup lang="ts">
import dayjs from 'dayjs';

const value = dayjs('2026-06-01');
</script>
