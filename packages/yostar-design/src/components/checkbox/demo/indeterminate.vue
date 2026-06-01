<template>
  <yo-space direction="vertical">
    <yo-checkbox v-model:checked="checkAll" :indeterminate="indeterminate" @change="onCheckAllChange">
      全选
    </yo-checkbox>
    <yo-checkbox-group v-model:value="checkedList" :options="plainOptions" />
  </yo-space>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';

const plainOptions = ['查看', '编辑', '发布'];
const checkedList = ref<string[]>(['查看']);
const checkAll = ref(false);
const indeterminate = computed(() => checkedList.value.length > 0 && checkedList.value.length < plainOptions.length);

watch(checkedList, value => {
  checkAll.value = value.length === plainOptions.length;
});

function onCheckAllChange() {
  checkedList.value = checkAll.value ? plainOptions : [];
}
</script>
