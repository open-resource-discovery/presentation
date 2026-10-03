<script setup lang="ts">
withDefaults(
  defineProps<{
    section?: string
    sectionTo?: string
  }>(),
  {
    section: 'Main presentation',
    sectionTo: '1',
  },
)
</script>

<template>
  <div class="deck-logo" role="banner">
    <a class="deck-brand" href="./1" aria-label="Go to the first slide">
      <img src="/img/ord-icon-color.svg" alt="" />
      <span>Open Resource Discovery</span>
    </a>
    <span class="deck-context-separator" aria-hidden="true"></span>
    <a class="deck-context" :href="`./${sectionTo}`">{{ section }}</a>
  </div>
</template>

<style scoped>
.deck-logo {
  position: absolute;
  bottom: 18px;
  left: 28px;
  z-index: 5;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--ord-muted);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.06em;
  opacity: 0.68;
  text-transform: uppercase;
}

.deck-brand {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: inherit;
  text-decoration: none;
}

.deck-logo img {
  display: block;
  width: 22px;
  height: 22px;
}

.deck-context-separator,
.deck-context {
  display: none;
}

</style>
