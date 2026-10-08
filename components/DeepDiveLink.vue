<script setup lang="ts">
withDefaults(
  defineProps<{
    to: string
    label: string
    kicker?: string
    sourceHref?: string
    sourceLabel?: string
  }>(),
  { kicker: 'Deep dive', sourceHref: undefined, sourceLabel: 'ORD specification' },
)
</script>

<template>
  <div class="deep-dive-links">
    <RouterLink class="deep-dive-link" :to="`/${to}`">
      <span>{{ kicker }}</span>
      <strong>{{ label }}</strong>
      <b aria-hidden="true">→</b>
    </RouterLink>
    <a v-if="sourceHref" class="deep-dive-related-source" :href="sourceHref" target="_blank" rel="noopener noreferrer">{{ sourceLabel }} ↗</a>
  </div>
</template>

<style scoped>
.deep-dive-links {
  position: absolute !important;
  top: 31px;
  right: 72px;
  z-index: 3;
  display: flex;
  align-items: center;
  gap: 8px;
}

.deep-dive-link,
.deep-dive-related-source {
  display: inline-flex;
  align-items: baseline;
  gap: 9px;
  border: 1px solid var(--ord-border);
  border-radius: 999px;
  background: color-mix(in srgb, var(--ord-bg) 88%, transparent);
  color: var(--ord-muted);
  font-size: 12px;
  padding: 8px 12px;
  text-decoration: none;
}

.deep-dive-related-source {
  color: var(--ord-brand);
  font-weight: 650;
}

.deep-dive-link span {
  color: var(--ord-brand);
  font-size: 10px;
  font-weight: 750;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.deep-dive-link strong {
  color: var(--ord-text);
  font-size: 12px;
  font-weight: 650;
}

.deep-dive-link b {
  color: var(--ord-brand);
  font-size: 15px;
}

.deep-dive-link:hover,
.deep-dive-related-source:hover {
  border-color: var(--ord-brand-2);
}
</style>
