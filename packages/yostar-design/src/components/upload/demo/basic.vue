<template>
  <yo-upload :before-upload="beforeUpload" />
</template>

<script setup lang="ts">
const beforeUpload = () => false;
</script>
