<script setup lang="ts">
withDefaults(defineProps<{ active?: string }>(), { active: '' })

const items = [
  { no: '01', label: 'Connect fragmented metadata', to: 'why-section' },
  { no: '02', label: 'How it works', to: 'how-section' },
  { no: '03', label: 'What it enables', to: 'enables-section' },
  { no: '04', label: 'Deep dives', to: 'deep-dive-section' },
  { no: '05', label: 'Tools & ecosystem', to: 'tools-ecosystem-section' },
]
</script>

<template>
  <nav class="cover-agenda" aria-label="Presentation agenda">
    <RouterLink
      v-for="item in items"
      :key="item.to"
      :to="`/${item.to}`"
      :class="{ active: item.no === active }"
      :aria-current="item.no === active ? 'page' : undefined"
    ><small>{{ item.no }}</small><span>{{ item.label }}</span></RouterLink>
  </nav>
</template>
