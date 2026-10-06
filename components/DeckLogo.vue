<script setup lang="ts">
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'
import { assetUrl } from '../utils/asset-url'

withDefaults(
  defineProps<{
    section?: string
  }>(),
  {
    section: 'Main presentation',
  },
)

const { $page, $nav } = useSlideContext()
const chapter = computed(() => {
  const divider = $nav.value.slides
    .filter(slide => slide.no <= $page.value && slide.meta?.slide?.frontmatter.deckSection)
    .at(-1)
  if (!divider) return undefined
  return {
    label: String(divider.meta.slide.frontmatter.deckSection),
    to: divider.meta.slide.frontmatter.routeAlias ?? String(divider.no),
    no: divider.no,
  }
})
</script>

<template>
  <div class="deck-logo" role="banner">
    <RouterLink class="deck-brand" to="/introduction" aria-label="Go to the first slide">
      <img :src="assetUrl('img/ord-icon-color.svg')" alt="" />
      <span>Open Resource Discovery</span>
    </RouterLink>
    <span class="deck-context-separator" aria-hidden="true"></span>
    <nav class="deck-breadcrumb" aria-label="Breadcrumb">
      <template v-if="chapter && chapter.no !== $page">
        <RouterLink class="deck-chapter" :to="`/${chapter.to}`" :aria-label="`Back to ${chapter.label} divider`">{{ chapter.label }}</RouterLink>
        <span class="breadcrumb-separator" aria-hidden="true">›</span>
      </template>
      <span class="deck-context" aria-current="page">{{ section }}</span>
    </nav>
  </div>
  <footer class="deck-footer" :aria-label="`Slide ${$page} of ${$nav.total}`">{{ $page }} <span aria-hidden="true">/</span> {{ $nav.total }}</footer>
</template>

<style scoped>
.deck-logo {
  position: absolute;
  top: 18px;
  left: 28px;
  z-index: 5;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--ord-muted);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.06em;
  opacity: 1;
  text-transform: uppercase;
}

.deck-brand {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: inherit;
  font-weight: 650;
  text-decoration: none;
}

.deck-logo img {
  display: block;
  width: 22px;
  height: 22px;
}

.deck-context-separator,
.deck-breadcrumb,
.deck-context {
  display: none;
}

.deck-footer {
  position: absolute !important;
  right: 24px;
  bottom: 16px;
  z-index: 5;
  color: var(--ord-faint);
  font-size: 12px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  line-height: 20px;
}
.deck-footer span { margin: 0 4px; opacity: .55; }

</style>
