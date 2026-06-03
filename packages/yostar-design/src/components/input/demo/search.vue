<template>
  <yo-space direction="vertical" class="input-search-demo">
    <yo-input v-model:value="value" appearance="search" placeholder="搜索项目">
      <template #prefix>
        <SearchOutlined />
      </template>
    </yo-input>
    <yo-space>
      <yo-input appearance="search" size="small" placeholder="Small">
        <template #prefix>
          <SearchOutlined />
        </template>
      </yo-input>
      <yo-input appearance="search" placeholder="Middle">
        <template #prefix>
          <SearchOutlined />
        </template>
      </yo-input>
      <yo-input appearance="search" size="large" placeholder="Large">
        <template #prefix>
          <SearchOutlined />
        </template>
      </yo-input>
    </yo-space>
    <yo-input appearance="search" allow-clear placeholder="支持清除">
      <template #prefix>
        <SearchOutlined />
      </template>
    </yo-input>
  </yo-space>
</template>

<script setup lang="ts">
import { SearchOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue';

const value = ref('');
</script>

<style scoped>
.input-search-demo {
  width: min(680px, 100%);
}
</style>
