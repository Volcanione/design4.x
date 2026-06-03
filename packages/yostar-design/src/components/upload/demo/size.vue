<template>
  <yo-space align="start">
    <yo-upload :before-upload="beforeUpload" />
    <yo-upload :width="104" :height="104" :before-upload="beforeUpload" />
    <yo-upload width="160px" height="90px" :before-upload="beforeUpload" />
  </yo-space>
</template>

<script setup lang="ts">
const beforeUpload = () => false;
</script>
