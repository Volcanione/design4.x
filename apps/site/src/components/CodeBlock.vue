<template>
  <pre class="doc-code-block"><code v-html="highlightedCode" /></pre>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    code: string;
    language?: 'ts' | 'template' | 'shell' | 'text';
  }>(),
  {
    language: 'text',
  },
);

const highlightedCode = computed(() =>
  props.code
    .trim()
    .split('\n')
    .map(line => `<span class="code-line">${highlightLine(line, props.language) || ' '}</span>`)
    .join(''),
);

function escapeHtml(source: string) {
  return source
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function highlightLine(line: string, language: NonNullable<typeof props.language>) {
  const escaped = escapeHtml(line);

  if (language === 'template') {
    return escaped
      .replace(/(\s)([:@#]?[A-Za-z_][\w:-]*)(=)/g, '$1<span class="token-attr">$2</span>$3')
      .replace(/(&lt;\/?)([\w-]+)/g, '<span class="token-punctuation">$1</span><span class="token-tag">$2</span>')
      .replace(/(\/?&gt;)/g, '<span class="token-punctuation">$1</span>')
      .replace(/(&quot;.*?&quot;|&#39;.*?&#39;)/g, '<span class="token-string">$1</span>');
  }

  return highlightScriptLike(escaped, language);
}

function highlightScriptLike(source: string, language: NonNullable<typeof props.language>) {
  const tokenPattern =
    language === 'shell'
      ? /(#.*$|&quot;.*?&quot;|&#39;.*?&#39;)/g
      : /(\/\/.*$|&quot;.*?&quot;|&#39;.*?&#39;|`.*?`)/g;
  let result = '';
  let lastIndex = 0;

  source.replace(tokenPattern, (match, _token, offset) => {
    result += highlightKeywords(source.slice(lastIndex, offset), language);
    result += `<span class="${match.startsWith('//') || match.startsWith('#') ? 'token-comment' : 'token-string'}">${match}</span>`;
    lastIndex = offset + match.length;
    return match;
  });

  result += highlightKeywords(source.slice(lastIndex), language);
  return result;
}

function highlightKeywords(source: string, language: NonNullable<typeof props.language>) {
  if (language === 'shell') {
    return source.replace(/\b(pnpm|npm|vite|node)\b/g, '<span class="token-keyword">$1</span>');
  }

  if (language !== 'ts') {
    return source;
  }

  return source
    .replace(
      /\b(import|from|export|default|const|let|var|return|true|false|new|function)\b/g,
      '<span class="token-keyword">$1</span>',
    )
    .replace(/\b(createApp|Components|YostarDesignResolver)\b/g, '<span class="token-function">$1</span>');
}
</script>
