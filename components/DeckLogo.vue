<template>
  <div class="deck-logo" aria-label="Open Resource Discovery">
    <img src="/img/ord-icon-color.svg" alt="" />
    <span>Open Resource Discovery</span>
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

.deck-logo img {
  display: block;
  width: 22px;
  height: 22px;
}

</style>
