<template>
  <section class="placeholder-page">
    <header class="page-heading">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
    </header>

    <div class="empty-state">
      <div class="empty-icon">□</div>
      <h2>内容待补充</h2>
      <p>这是一个预留页面，后续可以直接替换为真实文档、示例或业务模块。</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const title = computed(() => String(route.meta.title ?? '空白占位页面'));
const description = computed(() => String(route.meta.description ?? '当前页面已预留，方便后续迭代。'));
</script>
