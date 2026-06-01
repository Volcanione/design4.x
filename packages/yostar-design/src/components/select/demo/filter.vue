<template>
  <yo-space direction="vertical" class="select-filter-demo">
    <yo-select v-model:value="status" variant="filter" label="状态" :options="statusOptions" />
    <yo-select v-model:value="payment" variant="filter" label="支付方式" :options="paymentOptions" />
    <yo-select v-model:value="status" class="select-filter-demo__wide" label="订单状态" :options="statusOptions" />
  </yo-space>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const status = ref('all');
const payment = ref('all');

const statusOptions = [
  { label: '全部', value: 'all' },
  { label: '启用', value: 'enabled' },
  { label: '停用', value: 'disabled' },
];

const paymentOptions = [
  { label: '全部', value: 'all' },
  { label: '微信支付', value: 'wechat' },
  { label: '支付宝', value: 'alipay' },
  { label: '银行卡', value: 'card' },
];
</script>

<style scoped>
.select-filter-demo {
  width: min(360px, 100%);
}

.select-filter-demo__wide {
  width: 220px;
}
</style>
