<template>
  <section class="governance-notice" aria-label="Governance and funding">
    <div class="governance-logos">
      <img
        class="governance-funding"
        src="/img/ord-footer-bmwe.png"
        alt="Funded by the European Union – NextGenerationEU, and the German Federal Ministry for Economic Affairs and Energy"
      />
      <a href="https://apeirora.eu" target="_blank" rel="noopener noreferrer" aria-label="ApeiroRA">
        <img class="governance-brand" src="/img/apeirora.svg" alt="ApeiroRA" />
      </a>
      <a href="https://neonephos.org" target="_blank" rel="noopener noreferrer" aria-label="NeoNephos Foundation">
        <img class="governance-brand" src="/img/ord-footer-neonephos.svg" alt="NeoNephos Foundation" />
      </a>
    </div>
    <p class="governance-text">
      Open Resource Discovery is part of
      <a href="https://apeirora.eu" target="_blank" rel="noopener noreferrer">ApeiroRA</a>.
      Funded by the European Union – NextGenerationEU; the views expressed are those of the author(s)
      and do not necessarily reflect those of the European Union or the European Commission.
      Copyright © Linux Foundation Europe. For applicable policies see
      <a href="https://linuxfoundation.eu" target="_blank" rel="noopener noreferrer">linuxfoundation.eu</a>.
      Linux is a registered trademark of Linus Torvalds.
    </p>
  </section>
</template>

<style scoped>
.governance-notice {
  display: flex;
  align-items: center;
  gap: 28px;
  border-top: 1px solid var(--ord-border);
  padding-top: 18px;
}

.governance-logos {
  display: flex;
  align-items: center;
  gap: 24px;
  flex: none;
}

.governance-logos a {
  display: inline-flex;
  border: 0;
  text-decoration: none;
}

.governance-logos img {
  display: block;
  width: auto;
}

.governance-funding {
  height: 54px;
  border-radius: 3px;
}

.governance-brand {
  height: 22px;
  opacity: 0.9;
}

.governance-text {
  margin: 0;
  color: var(--ord-faint);
  font-size: 11px;
  line-height: 1.5;
}

.governance-text a {
  color: var(--ord-muted);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.governance-text a:hover {
  color: var(--ord-brand-3);
}
</style>
