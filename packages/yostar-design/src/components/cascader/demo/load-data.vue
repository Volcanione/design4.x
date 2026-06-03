<template>
  <yo-cascader
    v-model:value="value"
    class="cascader-demo-item"
    placeholder="动态加载"
    change-on-select
    :options="options"
    :load-data="loadData"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { CascaderProps } from 'ant-design-vue/es/cascader';

type CascaderOption = NonNullable<CascaderProps['options']>[number];

const value = ref<string[]>();
const options = ref<CascaderOption[]>([
  {
    value: 'console',
    label: '控制台',
    isLeaf: false,
  },
  {
    value: 'sdk',
    label: 'SDK',
    isLeaf: false,
  },
]);

const loadData: CascaderProps['loadData'] = selectedOptions => {
  const target = selectedOptions[selectedOptions.length - 1];
  target.loading = true;

  window.setTimeout(() => {
    target.loading = false;
    target.children = [
      {
        label: `${target.label} 配置`,
        value: `${target.value}-config`,
      },
      {
        label: `${target.label} 日志`,
        value: `${target.value}-log`,
      },
    ];
    options.value = [...options.value];
  }, 800);
};
</script>

<style scoped>
.cascader-demo-item {
  width: min(280px, 100%);
}
</style>
