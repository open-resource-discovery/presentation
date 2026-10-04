<script setup>
defineProps({
  number: { type: String, required: true },
  title: { type: String, required: true },
  text: { type: String, required: true },
  backdrop: { type: String, default: 'graph' },
});
</script>

<template>
  <div class="slide-shell section-slide dark-slide">
    <CoverBackdrop :variant="backdrop"></CoverBackdrop>
    <DeckLogo></DeckLogo>
    <section class="section-copy">
      <p class="section-number">{{ number }}</p>
      <h1>{{ title }}</h1>
      <p>{{ text }}</p>
    </section>
  </div>
</template>
