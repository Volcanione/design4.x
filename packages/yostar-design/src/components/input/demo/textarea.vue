<template>
  <yo-space direction="vertical" class="input-textarea-demo">
    <yo-textarea v-model:value="value" placeholder="请输入多行文本" :rows="4" />
    <yo-textarea allow-clear show-count :maxlength="120" placeholder="支持清除和字数统计" :rows="4" />
    <yo-textarea auto-size placeholder="自适应高度" />
    <yo-textarea :auto-size="{ minRows: 3, maxRows: 6 }" placeholder="限制自适应高度范围" />
    <yo-textarea disabled disabled-variant="strong" value="强禁用文字" :rows="3" />
  </yo-space>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref('');
</script>

<style scoped>
.input-textarea-demo {
  width: min(680px, 100%);
}
</style>
