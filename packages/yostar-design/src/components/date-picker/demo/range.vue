<template>
  <yo-space direction="vertical">
    <yo-space wrap>
      <yo-date-range-picker v-model:value="value" />
      <yo-date-range-picker v-model:value="showTimeValue" show-time />
    </yo-space>
    <yo-space wrap>
      <yo-date-range-picker size="small" :placeholder="['开始日期', '结束日期']" />
      <yo-date-range-picker :placeholder="['开始日期', '结束日期']" />
      <yo-date-range-picker size="large" :placeholder="['开始日期', '结束日期']" />
    </yo-space>
    <yo-space wrap>
      <yo-date-range-picker v-model:value="timezoneValue" show-time timezone="UTC+8" />
      <yo-date-range-picker disabled :default-value="value" disabled-variant="strong" />
    </yo-space>
  </yo-space>
</template>

<script setup lang="ts">
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import type { Dayjs } from 'dayjs';
import { ref } from 'vue';

dayjs.extend(utc);

const value = ref<[Dayjs, Dayjs]>([dayjs('2026-06-01'), dayjs('2026-06-07')]);
const showTimeValue = ref<[Dayjs, Dayjs]>([dayjs('2026-06-01 09:00:00'), dayjs('2026-06-07 18:00:00')]);
const timezoneValue = ref<[Dayjs, Dayjs]>([
  dayjs.utc('2026-06-01T09:00:00Z'),
  dayjs.utc('2026-06-02T09:00:00Z'),
]);
</script>
