<template>
  <yo-cascader v-model:value="value" class="cascader-demo-item" placeholder="请选择地区" :options="options" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref<string[]>();

const options = [
  {
    value: 'zhejiang',
    label: '浙江',
    children: [
      {
        value: 'hangzhou',
        label: '杭州',
        children: [
          { value: 'xihu', label: '西湖' },
          { value: 'yuhang', label: '余杭' },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: '江苏',
    children: [
      {
        value: 'nanjing',
        label: '南京',
        children: [
          { value: 'zhonghuamen', label: '中华门' },
          { value: 'xuanwu', label: '玄武' },
        ],
      },
    ],
  },
];
</script>

<style scoped>
.cascader-demo-item {
  width: min(280px, 100%);
}
</style>
