<template>
  <yo-auto-complete
    v-model:value="value"
    class="auto-complete-demo-item"
    allow-clear
    placeholder="搜索项目"
    :options="computedOptions"
    @search="handleSearch"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const source = ['项目管理', '项目配置', '数据分析', '运营活动', '权限管理'];
const value = ref('');
const computedOptions = ref(source.map(item => ({ value: item })));

function handleSearch(keyword: string) {
  computedOptions.value = source
    .filter(item => item.toLowerCase().includes(keyword.toLowerCase()))
    .map(item => ({ value: item }));
}
</script>

<style scoped>
.auto-complete-demo-item {
  width: min(320px, 100%);
}
</style>
