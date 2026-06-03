<template>
  <yo-upload
    v-model:file-list="fileList"
    multiple
    :max-count="6"
    description="最多上传 6 张图片"
    :before-upload="beforeUpload"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { UploadFile } from 'ant-design-vue/es/upload';

const beforeUpload = () => false;

function createImageUrl(primary: string, secondary: string, label: string) {
  const svg = `
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="80" height="80" rx="4" fill="${secondary}" />
      <circle cx="40" cy="30" r="13" fill="${primary}" />
      <path d="M16 64L30 47L42 56L52 42L66 64H16Z" fill="${primary}" opacity="0.72" />
      <text x="40" y="74" text-anchor="middle" font-size="10" fill="${primary}" font-family="Arial">${label}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

const fileList = ref<UploadFile[]>([
  {
    uid: '1',
    name: 'image-1.png',
    status: 'done',
    url: createImageUrl('#3A7CFF', '#EBF2FF', '01'),
  },
  {
    uid: '2',
    name: 'image-2.png',
    status: 'done',
    url: createImageUrl('#22C070', '#EAF9F1', '02'),
  },
  {
    uid: '3',
    name: 'image-3.png',
    status: 'done',
    url: createImageUrl('#FFA940', '#FFF7E8', '03'),
  },
]);
</script>
