<script setup lang="ts">
withDefaults(
  defineProps<{
    backTo?: string
    backLabel?: string
    showIndex?: boolean
  }>(),
  {
    backTo: 'deep-dives',
    backLabel: 'Deep dives',
    showIndex: true,
  },
)
</script>

<template>
  <nav class="deep-dive-nav" aria-label="Deep-dive navigation">
    <a v-if="showIndex" href="./deep-dives">All deep dives</a>
    <a v-if="backTo !== 'deep-dives'" :href="`./${backTo}`">← {{ backLabel }}</a>
  </nav>
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
</style>
