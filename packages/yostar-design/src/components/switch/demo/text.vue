<template>
  <yo-switch v-model:checked="checked" checked-children="开" un-checked-children="关" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const checked = ref(true);
</script>
