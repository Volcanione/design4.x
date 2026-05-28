<template>
  <yo-space>
    <yo-button type="primary">Primary</yo-button>
    <yo-button>Default</yo-button>
    <yo-button type="dashed">Dashed</yo-button>
    <yo-button type="text">Text</yo-button>
    <yo-button type="link">Link</yo-button>
    <yo-button danger>Danger</yo-button>
    <yo-button>
      <template #icon><PlusOutlined /></template>
      Icon
    </yo-button>
    <yo-button type="primary" loading>Loading</yo-button>
    <yo-button disabled>Disabled</yo-button>
    <yo-button disabled disabled-variant="strong">Strong Disabled</yo-button>
  </yo-space>
</template>

<script setup lang="ts">
import { PlusOutlined } from '@ant-design/icons-vue';
</script>
