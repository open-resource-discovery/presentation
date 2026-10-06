<script setup lang="ts">
withDefaults(
  defineProps<{
    to: string
    label: string
    kicker?: string
  }>(),
  { kicker: 'Deep dive' },
)
</script>

<template>
  <RouterLink class="deep-dive-link" :to="`/${to}`">
    <span>{{ kicker }}</span>
    <strong>{{ label }}</strong>
    <b aria-hidden="true">→</b>
  </RouterLink>
</template>

<style scoped>
.deep-dive-link {
  position: absolute !important;
  top: 31px;
  right: 72px;
  z-index: 3;
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

.deep-dive-link:hover {
  border-color: var(--ord-brand-2);
}
</style>
