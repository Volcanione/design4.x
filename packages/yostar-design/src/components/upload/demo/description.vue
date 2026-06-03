<template>
  <yo-space align="start">
    <yo-upload description="支持 JPG、PNG" :before-upload="beforeUpload" />
    <yo-upload :before-upload="beforeUpload">
      <span class="upload-trigger">+</span>
      <template #description>
        建议尺寸 800 * 800
      </template>
    </yo-upload>
  </yo-space>
</template>

<script setup lang="ts">
const beforeUpload = () => false;
</script>

<style scoped>
.upload-trigger {
  color: inherit;
  font-size: 24px;
  line-height: 1;
}
</style>
