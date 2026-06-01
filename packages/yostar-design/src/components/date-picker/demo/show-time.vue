<template>
  <yo-date-picker
    v-model:value="value"
    show-time
    placeholder="请选择日期时间"
  />
</template>

<script setup lang="ts">
import dayjs from 'dayjs';
import { ref } from 'vue';

const value = ref(dayjs('2026-06-01 12:00:00'));
</script>
