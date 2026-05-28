<template>
  <yo-space direction="vertical" class="input-demo">
    <yo-input v-model:value="value" placeholder="请输入内容" />
    <yo-input allow-clear placeholder="支持清除" />
    <yo-space>
      <yo-input size="small" placeholder="Small" />
      <yo-input placeholder="Middle" />
      <yo-input size="large" placeholder="Large" />
    </yo-space>
    <yo-space>
      <yo-input size="large" placeholder="Large 带前缀图标">
        <template #prefix>
          <SearchOutlined />
        </template>
      </yo-input>
      <yo-input size="large" allow-clear placeholder="Large 带后缀图标和清除按钮">
        <template #suffix>
          <InfoCircleOutlined />
        </template>
      </yo-input>
    </yo-space>
    <yo-space>
      <yo-input disabled value="默认禁用态" />
      <yo-input disabled disabled-variant="strong" value="强禁用文字" />
    </yo-space>
  </yo-space>
</template>

<script setup lang="ts">
import { InfoCircleOutlined, SearchOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue';

const value = ref('');
</script>

<style scoped>
.input-demo {
  width: min(680px, 100%);
}
</style>
