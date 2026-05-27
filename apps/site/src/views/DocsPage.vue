<template>
  <article v-if="record" class="docs-page">
    <header class="docs-family">
      <h1>{{ record.group }} <span>{{ groupEnglish }}</span></h1>
      <p>{{ groupDescription }}</p>
    </header>

    <header class="docs-header">
      <h2>{{ record.title }} <span>{{ record.subtitle }}</span></h2>
    </header>

    <div v-if="isLoading" class="docs-state">加载中...</div>
    <div v-else-if="loadError" class="docs-state docs-state-error">{{ loadError }}</div>

    <template v-else>
      <section v-for="demo in demos" :key="demo.key" class="demo-section">
        <div class="demo-preview">
          <component :is="demo.component" />
        </div>
        <div class="demo-code">
          <div class="code-toolbar">
            <span>Template / 模板</span>
          </div>
          <pre class="code-block"><code v-html="demo.highlightedSource" /></pre>
        </div>
      </section>

      <section class="markdown-body" v-html="docHtml" />
    </template>
  </article>
</template>

<script setup lang="ts">
import MarkdownIt from 'markdown-it';
import { computed, markRaw, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import type { Component } from 'vue';
import type { ComponentRouteRecord } from '../generated/routes';

interface LoadedDemo {
  key: string;
  title: string;
  component: Component;
  source: string;
  highlightedSource: string;
}

const route = useRoute();
const markdown = new MarkdownIt({
  html: false,
  linkify: true,
});
let loadVersion = 0;

const record = computed(() => route.meta.componentRecord as ComponentRouteRecord | undefined);
const groupEnglish = computed(() => {
  const groupMap: Record<string, string> = {
    通用: 'General',
    布局: 'Layout',
    导航: 'Navigation',
    数据录入: 'Data Entry',
    数据展示: 'Data Display',
    反馈: 'Feedback',
    其他: 'Other',
  };

  return record.value ? groupMap[record.value.group] ?? record.value.group : '';
});
const groupDescription = computed(() => {
  const descriptionMap: Record<string, string> = {
    通用: '最常用的基础组件',
    布局: '页面结构与内容组织',
    导航: '页面跳转与层级定位',
    数据录入: '表单、选择与输入控件',
    数据展示: '表格、标签与信息展示',
    反馈: '弹窗、消息与状态反馈',
    其他: '扩展能力与辅助组件',
  };

  return record.value ? descriptionMap[record.value.group] ?? '组件能力预览' : '';
});
const docHtml = ref('');
const demos = ref<LoadedDemo[]>([]);
const isLoading = ref(false);
const loadError = ref('');

function stripFrontmatter(source: string) {
  return source.replace(/^---[\s\S]*?---/, '').trim();
}

function escapeHtml(source: string) {
  return source
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function highlightTemplate(source: string) {
  return escapeHtml(source)
    .split('\n')
    .map(line =>
      line
        .replace(/(\s)([:@#]?[A-Za-z_][\w:-]*)(=)/g, '$1<span class="token-attr">$2</span>$3')
        .replace(/(&lt;\/?)([\w-]+)/g, '<span class="token-punctuation">$1</span><span class="token-tag">$2</span>')
        .replace(/(\/?&gt;)/g, '<span class="token-punctuation">$1</span>')
        .replace(/(&quot;.*?&quot;|&#39;.*?&#39;)/g, '<span class="token-string">$1</span>'),
    )
    .map(line => `<span class="code-line">${line || ' '}</span>`)
    .join('');
}

async function loadPage(nextRecord: ComponentRouteRecord | undefined) {
  const currentLoadVersion = ++loadVersion;

  if (!nextRecord) {
    docHtml.value = '';
    demos.value = [];
    return;
  }

  isLoading.value = true;
  loadError.value = '';

  try {
    const docModule = (await nextRecord.doc()) as { default?: string };
    const nextDocHtml = markdown.render(stripFrontmatter(docModule.default ?? ''));

    const nextDemos = await Promise.all(
      nextRecord.demos.map(async demo => {
        const [componentModule, sourceModule] = await Promise.all([
          demo.component() as Promise<{ default: Component }>,
          demo.source() as Promise<{ default?: string }>,
        ]);

        return {
          key: demo.key,
          title: demo.title,
          component: markRaw(componentModule.default),
          source: sourceModule.default ?? '',
          highlightedSource: highlightTemplate(sourceModule.default ?? ''),
        };
      }),
    );

    if (currentLoadVersion !== loadVersion) {
      return;
    }

    docHtml.value = nextDocHtml;
    demos.value = nextDemos;
  } catch {
    if (currentLoadVersion !== loadVersion) {
      return;
    }

    docHtml.value = '';
    demos.value = [];
    loadError.value = '文档加载失败，请稍后重试。';
  } finally {
    if (currentLoadVersion === loadVersion) {
      isLoading.value = false;
    }
  }
}

watch(record, loadPage, { immediate: true });
</script>
