<template>
  <div class="slide-shell ord-cover dark-slide">
    <CoverBackdrop></CoverBackdrop>
    <DeckLogo></DeckLogo>
    <div class="cover-grid">
      <section class="cover-copy">
        <p class="cover-index">Connected metadata, open discovery</p>
        <h1>Open Resource Discovery</h1>
        <p class="lead">
          An open protocol to connect fragmented metadata, building on the industry standards that describe application and service resources.
        </p>
        <a class="cover-spec-link" href="https://open-resource-discovery.org/spec-v1" target="_blank" rel="noopener noreferrer">
          Read the ORD specification <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10" /></svg>
        </a>
      </section>
    </div>
    <div class="cover-governance" aria-label="Governance">
      <a href="https://apeirora.eu" target="_blank" rel="noopener noreferrer" aria-label="ApeiroRA">
        <img src="/img/apeirora.svg" alt="ApeiroRA" />
      </a>
      <span class="cover-governance-sep" aria-hidden="true"></span>
      <a href="https://neonephos.org" target="_blank" rel="noopener noreferrer" aria-label="NeoNephos Foundation">
        <img src="/img/ord-footer-neonephos.svg" alt="NeoNephos Foundation" />
      </a>
    </div>
    <CoverAgenda />
  </div>
</template>
