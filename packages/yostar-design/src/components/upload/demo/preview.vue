<template>
  <yo-upload v-model:file-list="fileList" :before-upload="beforeUpload" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { UploadFile } from 'ant-design-vue/es/upload';

const beforeUpload = () => false;

const fileList = ref<UploadFile[]>([
  {
    uid: '1',
    name: 'cover.png',
    status: 'done',
    url: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2280%22%20height%3D%2280%22%20viewBox%3D%220%200%2080%2080%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Crect%20width%3D%2280%22%20height%3D%2280%22%20rx%3D%224%22%20fill%3D%22%23EBF2FF%22/%3E%3Ccircle%20cx%3D%2240%22%20cy%3D%2232%22%20r%3D%2212%22%20fill%3D%22%233A7CFF%22/%3E%3Cpath%20d%3D%22M18%2064L32%2048L43%2057L53%2044L66%2064H18Z%22%20fill%3D%22%235B92FF%22/%3E%3C/svg%3E',
  },
]);
</script>
