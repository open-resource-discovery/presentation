<template>
  <section class="governance-notice" aria-label="Governance and funding">
    <div class="governance-logos">
      <img src="/img/ord-footer-bmwe.png" alt="Funded by the European Union – NextGenerationEU, and the German Federal Ministry for Economic Affairs" />
      <a href="https://neonephos.org" target="_blank" rel="noopener noreferrer" aria-label="NeoNephos Foundation">
        <img src="/img/ord-footer-neonephos-light.svg" alt="NeoNephos Foundation" />
      </a>
      <a href="https://apeirora.eu" target="_blank" rel="noopener noreferrer" aria-label="ApeiroRA">
        <img src="/img/apeirora.svg" alt="ApeiroRA" />
      </a>
    </div>
    <div class="governance-text">
      <p>
        Open Resource Discovery is part of <a href="https://apeirora.eu" target="_blank" rel="noopener noreferrer">ApeiroRA</a>
        and a project of the <a href="https://neonephos.org" target="_blank" rel="noopener noreferrer">NeoNephos Foundation</a>.
        For applicable policies including privacy policy, terms of use and trademark usage guidelines,
        please see <a href="https://linuxfoundation.eu" target="_blank" rel="noopener noreferrer">linuxfoundation.eu</a>.
        Linux is a registered trademark of Linus Torvalds. Copyright © Linux Foundation Europe.
      </p>
      <p>
        Funded by the European Union – NextGenerationEU. The views and opinions expressed are solely those of
        the author(s) and do not necessarily reflect the views of the European Union or the European Commission.
        Neither the European Union nor the European Commission can be held responsible for them.
      </p>
    </div>
  </section>
</template>

<style scoped>
.governance-notice {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.governance-logos {
  display: flex;
  align-items: center;
  gap: 26px;
  opacity: 0.9;
}

.governance-logos img {
  display: block;
  width: auto;
}

.governance-logos > :nth-child(1) img { height: 40px; }
.governance-logos > :nth-child(2) img { height: 24px; }
.governance-logos > :nth-child(3) img { height: 24px; }

.governance-text p {
  margin: 0;
  max-width: 1180px;
  color: var(--ord-faint);
  font-size: 11px;
  line-height: 1.5;
}

.governance-text p + p {
  margin-top: 6px;
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
