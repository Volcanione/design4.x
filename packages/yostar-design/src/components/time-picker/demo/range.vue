<template>
  <yo-space direction="vertical">
    <yo-space wrap>
      <yo-time-range-picker v-model:value="value" />
      <yo-time-range-picker v-model:value="formatValue" format="HH:mm" />
    </yo-space>
    <yo-space wrap>
      <yo-time-range-picker size="small" :placeholder="['开始时间', '结束时间']" />
      <yo-time-range-picker :placeholder="['开始时间', '结束时间']" />
      <yo-time-range-picker size="large" :placeholder="['开始时间', '结束时间']" />
    </yo-space>
    <yo-space wrap>
      <yo-time-range-picker v-model:value="timezoneValue" format="HH:mm:ss" timezone="UTC+8" />
      <yo-time-range-picker disabled :default-value="value" disabled-variant="strong" />
    </yo-space>
  </yo-space>
</template>

<script setup lang="ts">
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import type { Dayjs } from 'dayjs';
import { ref } from 'vue';

dayjs.extend(utc);

const value = ref<[Dayjs, Dayjs]>([dayjs('2026-06-01 09:00:00'), dayjs('2026-06-01 18:00:00')]);
const formatValue = ref<[Dayjs, Dayjs]>([dayjs('2026-06-01 09:30:00'), dayjs('2026-06-01 18:30:00')]);
const timezoneValue = ref<[Dayjs, Dayjs]>([
  dayjs.utc('2026-06-01T09:00:00Z'),
  dayjs.utc('2026-06-01T10:00:00Z'),
]);
</script>
