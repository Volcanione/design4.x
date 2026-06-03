<template>
  <yo-upload :before-upload="beforeUpload">
    <span class="upload-trigger">
      <span class="upload-trigger__plus">+</span>
      <span>上传图片</span>
    </span>
  </yo-upload>
</template>

<script setup lang="ts">
const beforeUpload = () => false;
</script>

<style scoped>
.upload-trigger {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  color: inherit;
  font-size: 12px;
  line-height: 14px;
}

.upload-trigger__plus {
  font-size: 22px;
  line-height: 1;
}
</style>
