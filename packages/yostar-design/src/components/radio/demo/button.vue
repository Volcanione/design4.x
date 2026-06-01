<template>
  <yo-radio-group v-model:value="value" option-type="button" button-style="solid">
    <yo-radio-button value="day">日</yo-radio-button>
    <yo-radio-button value="week">周</yo-radio-button>
    <yo-radio-button value="month">月</yo-radio-button>
  </yo-radio-group>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref('day');
</script>
