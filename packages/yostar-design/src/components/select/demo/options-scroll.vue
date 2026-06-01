<template>
  <yo-space direction="vertical" class="select-scroll-demo">
    <yo-select
      v-model:value="value"
      show-search
      allow-clear
      placeholder="请选择项目"
      :list-height="160"
      :options="options"
    />
  </yo-space>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const value = ref<string>();

const options = computed(() =>
  Array.from({ length: 80 }, (_, index) => {
    const number = String(index + 1).padStart(2, '0');

    return {
      label: `项目选项 ${number}`,
      value: `project-${number}`,
    };
  }),
);
</script>

<style scoped>
.select-scroll-demo {
  width: min(360px, 100%);
}

.select-scroll-demo :deep(.ant-space-item),
.select-scroll-demo :deep(.yo-select) {
  width: 100%;
}
</style>
