<template>
  <yo-space>
    <yo-input-number
      v-model:value="amount"
      :min="0"
      :formatter="value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
      :parser="value => value!.replace(/\$\s?|(,*)/g, '')"
    />
    <yo-input-number
      v-model:value="percent"
      :min="0"
      :max="100"
      :formatter="value => `${value}%`"
      :parser="value => value!.replace('%', '')"
    />
  </yo-space>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const amount = ref(12000);
const percent = ref(85);
</script>
