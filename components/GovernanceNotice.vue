<template>
  <section class="governance-notice" aria-label="Governance and funding">
    <GovernanceLogos />
    <div class="governance-disclosure">
      <img
        class="governance-funding"
        src="/img/ord-footer-bmwe.png"
        alt="Funded by the European Union – NextGenerationEU, and the German Federal Ministry for Economic Affairs and Energy"
      />
      <p class="governance-text">
        Open Resource Discovery is part of
        <a href="https://apeirora.eu" target="_blank" rel="noopener noreferrer">ApeiroRA</a>.
        Funded by the European Union – NextGenerationEU; the views expressed are those of the author(s)
        and do not necessarily reflect those of the European Union or the European Commission.
        Copyright © Linux Foundation Europe. For applicable policies see
        <a href="https://linuxfoundation.eu" target="_blank" rel="noopener noreferrer">linuxfoundation.eu</a>.
        Linux is a registered trademark of Linus Torvalds.
      </p>
    </div>
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

.governance-disclosure {
  display: flex;
  align-items: center;
  gap: 16px;
  min-width: 0;
}

.governance-funding {
  flex: none;
  width: auto;
  height: 54px;
  border-radius: 3px;
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
