<script setup lang="ts">
withDefaults(
  defineProps<{
    backTo?: string
    backLabel?: string
    nextTo?: string
    nextLabel?: string
    showIndex?: boolean
    specHref?: string
    specLabel?: string
  }>(),
  {
    backTo: 'deep-dives',
    backLabel: 'Deep dives',
    nextTo: undefined,
    nextLabel: undefined,
    showIndex: true,
    specHref: undefined,
    specLabel: 'ORD specification',
  },
)
</script>

<template>
  <nav class="deep-dive-nav" aria-label="Presentation navigation">
    <RouterLink v-if="showIndex" to="/deep-dives">All topics</RouterLink>
    <RouterLink v-if="backTo !== 'deep-dives'" class="previous-link" :to="`/${backTo}`">← {{ backLabel }}</RouterLink>
    <RouterLink v-if="nextTo" class="next-link" :to="`/${nextTo}`">{{ nextLabel }} →</RouterLink>
  </nav>
  <a v-if="specHref" class="deep-dive-source" :href="specHref" target="_blank" rel="noopener noreferrer">{{ specLabel }} ↗</a>
</template>

<style scoped>
.deep-dive-nav {
  position: absolute !important;
  top: 31px;
  right: 72px;
  z-index: 3;
  display: flex;
  gap: 8px;
}

.deep-dive-nav a {
  border: 1px solid var(--ord-border);
  border-radius: 999px;
  background: var(--ord-pill-bg);
  color: var(--ord-muted);
  font-size: 11px;
  font-weight: 650;
  padding: 7px 11px;
  text-decoration: none;
}

.deep-dive-nav a:hover {
  border-color: var(--ord-brand-2);
  color: var(--ord-text);
}

.deep-dive-nav a:focus-visible,
.deep-dive-source:focus-visible {
  outline: 2px solid var(--ord-brand);
  outline-offset: 4px;
}

.deep-dive-source {
  position: absolute;
  right: 110px;
  bottom: 20px;
  z-index: 7;
  color: var(--ord-brand);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.2;
  text-decoration: underline;
  text-underline-offset: 4px;
}

.deep-dive-source:hover { color: var(--ord-text); }
</style>
