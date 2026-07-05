<template>
  <div class="deck-logo" aria-label="Open Resource Discovery">
    <img src="/img/ord-icon-color.svg" alt="" />
    <span>Open Resource Discovery</span>
  </div>
</template>

<style scoped>
.deck-logo {
  position: absolute;
  top: 28px;
  left: 72px;
  z-index: 5;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: var(--ord-text);
  font-size: 17px;
  font-weight: 650;
  letter-spacing: 0;
}

.deck-logo img {
  display: block;
  width: 34px;
  height: 34px;
}

</style>
