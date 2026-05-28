<template>
  <yo-config-provider theme-mode="console">
    <div class="site-shell yo-root">
      <header class="site-header">
        <router-link class="home-link" to="/quick-start" aria-label="Home">
          <span class="home-icon">⌂</span>
        </router-link>

        <router-link class="brand" to="/quick-start">
          <span>Yodesign Playground</span>
        </router-link>

        <nav class="top-nav">
          <router-link v-slot="{ href, navigate }" custom to="/quick-start">
            <a :href="href" :class="{ active: activeSection === 'quick-start' }" @click="navigate">快速开始</a>
          </router-link>
          <router-link v-slot="{ href, navigate }" custom :to="firstComponentPath">
            <a :href="href" :class="{ active: activeSection === 'components' }" @click="navigate">组件展示</a>
          </router-link>
          <router-link v-slot="{ href, navigate }" custom to="/integration">
            <a :href="href" :class="{ active: activeSection === 'integration' }" @click="navigate">集成模块</a>
          </router-link>
        </nav>
      </header>

      <div class="site-body">
        <aside class="site-sidebar">
          <template v-if="activeSection === 'quick-start'">
            <router-link v-for="item in quickStartMenu" :key="item.path" v-slot="{ href, navigate }" custom :to="item.path">
              <a :href="href" class="nav-item" :class="{ active: isMenuActive(item.path) }" @click="navigate">
                {{ item.title }}
              </a>
            </router-link>
          </template>

          <template v-else-if="activeSection === 'components'">
            <input v-model.trim="componentKeyword" class="component-search" placeholder="搜索组件" type="text" />
            <div v-for="group in groups" :key="group.name" class="nav-group">
              <div class="nav-title">{{ group.name }}</div>
              <router-link v-for="item in group.items" :key="item.path" v-slot="{ href, navigate }" custom :to="item.path">
                <a :href="href" class="nav-item" :class="{ active: isMenuActive(item.path) }" @click="navigate">
                  <span>{{ item.title }}</span>
                  <small>{{ item.subtitle }}</small>
                </a>
              </router-link>
            </div>
            <div v-if="groups.length === 0" class="nav-empty">暂无匹配组件</div>
          </template>

          <template v-else>
            <router-link v-for="item in integrationMenu" :key="item.path" v-slot="{ href, navigate }" custom :to="item.path">
              <a :href="href" class="nav-item" :class="{ active: isMenuActive(item.path) }" @click="navigate">
                {{ item.title }}
              </a>
            </router-link>
          </template>
        </aside>

        <main ref="contentRef" class="site-content">
          <router-view />
        </main>
      </div>
    </div>
  </yo-config-provider>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { componentRoutes } from './generated/routes';

const route = useRoute();
const contentRef = ref<HTMLElement>();
const componentKeyword = ref('');

const quickStartMenu = [
  { title: '快速开始', path: '/quick-start' },
  { title: '引入方式', path: '/quick-start/import' },
  { title: '架构说明', path: '/quick-start/architecture' },
  { title: '数据驱动', path: '/quick-start/data-driven' },
  { title: 'Skill', path: '/quick-start/skill' },
];

const integrationMenu = [
  { title: '集成模块概览', path: '/integration' },
  { title: '页面布局', path: '/integration/layout' },
  { title: 'Schema 表单', path: '/integration/schema-form' },
];

const activeSection = computed(() => {
  if (route.path.startsWith('/components')) {
    return 'components';
  }

  if (route.path.startsWith('/integration')) {
    return 'integration';
  }

  return 'quick-start';
});

const firstComponentPath = computed(() => componentRoutes[0]?.path ?? '/components');

const filteredComponentRoutes = computed(() => {
  const keyword = componentKeyword.value.toLowerCase();

  if (!keyword) {
    return componentRoutes;
  }

  return componentRoutes.filter(item =>
    [item.name, item.title, item.subtitle, item.group]
      .filter(Boolean)
      .some(value => value.toLowerCase().includes(keyword)),
  );
});

const groups = computed(() => {
  const map = new Map<string, typeof componentRoutes>();

  filteredComponentRoutes.value.forEach(route => {
    const list = map.get(route.group) ?? [];
    list.push(route);
    map.set(route.group, list);
  });

  return [...map.entries()].map(([name, items]) => ({
    name,
    items,
  }));
});

function isMenuActive(path: string) {
  return route.path === path;
}

watch(
  () => route.fullPath,
  () => {
    contentRef.value?.scrollTo({ top: 0 });
  },
);
</script>
