<script setup lang="ts">
import { assetUrl } from '../utils/asset-url'
</script>

<template>
  <nav class="governance-logos" aria-label="Project and governance organizations">
    <a href="https://linuxfoundation.eu/" target="_blank" rel="noopener noreferrer" aria-label="Linux Foundation Europe">
      <img class="governance-linux-foundation" :src="assetUrl('img/linux-foundation-europe-white.svg')" alt="Linux Foundation Europe" />
    </a>
    <span class="governance-separator" aria-hidden="true"></span>
    <a href="https://neonephos.org" target="_blank" rel="noopener noreferrer" aria-label="NeoNephos Foundation">
      <img class="governance-neonephos" :src="assetUrl('img/ord-footer-neonephos.svg')" alt="NeoNephos Foundation" />
    </a>
    <span class="governance-separator" aria-hidden="true"></span>
    <a href="https://apeirora.eu" target="_blank" rel="noopener noreferrer" aria-label="ApeiroRA">
      <img class="governance-apeirora" :src="assetUrl('img/apeirora.svg')" alt="ApeiroRA" />
    </a>
  </nav>
</template>

<style scoped>
.governance-logos {
  display: flex;
  flex: none;
  align-items: center;
  gap: 18px;
  width: fit-content;
  opacity: 0.82;
}

.governance-logos a {
  display: inline-flex;
  flex: none;
  align-items: center;
  border: 0;
  text-decoration: none;
}

.governance-logos img {
  display: block;
  width: auto;
}

.governance-apeirora { height: 24px; }
.governance-neonephos { height: 22px; }
.governance-linux-foundation { height: 28px; }

.governance-separator {
  width: 1px;
  height: 22px;
  background: var(--ord-border);
}

.governance-logos a:focus-visible {
  outline: 2px solid var(--ord-brand-2);
  outline-offset: 6px;
}
</style>
