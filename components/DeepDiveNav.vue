<script setup lang="ts">
withDefaults(
  defineProps<{
    specHref?: string
    specLabel?: string
    secondaryHref?: string
    secondaryLabel?: string
  }>(),
  {
    specHref: undefined,
    specLabel: 'ORD specification',
    secondaryHref: undefined,
    secondaryLabel: 'Source',
  },
)
</script>

<template>
  <div v-if="specHref || secondaryHref" class="deep-dive-sources">
    <a v-if="specHref" class="deep-dive-source" :href="specHref" target="_blank" rel="noopener noreferrer">{{ specLabel }} ↗</a>
    <a v-if="secondaryHref" class="deep-dive-source" :href="secondaryHref" target="_blank" rel="noopener noreferrer">{{ secondaryLabel }} ↗</a>
  </div>
</template>

<style scoped>
.deep-dive-source:focus-visible {
  outline: 2px solid var(--ord-brand);
  outline-offset: 4px;
}

.deep-dive-sources {
  position: absolute;
  bottom: 15px;
  left: 20px;
  z-index: 7;
  display: flex;
  align-items: center;
  gap: 6px;
}

.deep-dive-source {
  border: 0;
  border-radius: 3px;
  background: var(--ord-link-bg);
  color: var(--ord-brand);
  font-size: 13px;
  font-weight: 600;
  line-height: 20px;
  padding: 1px 4px;
  text-decoration: none;
  transition: background-color 140ms ease;
}

.deep-dive-source:hover {
  border: 0;
  background: var(--ord-link-bg-hover);
  color: var(--ord-brand);
}
</style>
