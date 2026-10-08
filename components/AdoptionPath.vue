<template>
  <figure class="adoption-path" aria-label="A focused ORD adoption path from describing one API to discovering its contract">
    <div class="path-intent">
      <span>Focused pilot</span>
      <strong>One existing API</strong>
      <i aria-hidden="true">+</i>
      <strong>one useful consumer</strong>
    </div>

    <div class="path-steps">
      <section class="path-step describe">
        <header>
          <span class="number">01</span>
          <span class="role">Provider</span>
        </header>
        <h3>Describe</h3>
        <p>Publish one Package and API Resource, link the existing OpenAPI definition, and expose ORD configuration.</p>
      </section>
      <i class="connector" aria-hidden="true"></i>
      <section class="path-step connect">
        <header>
          <span class="number">02</span>
          <span class="role">Provider + Aggregator</span>
        </header>
        <h3>Validate &amp; connect</h3>
        <p>Validate the metadata and native definition, then onboard the Provider for aggregation.</p>
      </section>
      <i class="connector" aria-hidden="true"></i>
      <section class="path-step discover">
        <header>
          <span class="number">03</span>
          <span class="role">Consumer</span>
        </header>
        <h3>Discover</h3>
        <p>Find the API in the chosen experience and verify that its native contract can be retrieved.</p>
      </section>
    </div>

    <figcaption>
      <div>
        <span>Proof of value</span>
        <strong>A consumer can find the API and follow ORD metadata to its contract.</strong>
      </div>
      <p>Then add Entity Types, dependencies, and more resource types as the use case grows.</p>
    </figcaption>
  </figure>
</template>

<style scoped>
.adoption-path {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  gap: 22px;
  margin: 0;
}

.path-intent {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: var(--ord-text);
  font-size: 17px;
}

.path-intent > span {
  border-radius: 999px;
  background: var(--ord-teal-soft);
  color: var(--ord-brand);
  font-size: 12px;
  font-weight: 750;
  letter-spacing: 0.05em;
  padding: 7px 11px;
  text-transform: uppercase;
}

.path-intent strong { font-size: 19px; }
.path-intent i { color: var(--ord-faint); font-style: normal; font-weight: 650; }

.path-steps {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 54px minmax(0, 1fr) 54px minmax(0, 1fr);
  align-items: center;
}

.path-step {
  display: grid;
  min-height: 238px;
  grid-template-rows: 24px 42px 1fr;
  gap: 14px;
  border: 1px solid var(--ord-sep);
  border-top: 5px solid var(--ord-provider);
  border-radius: var(--ord-radius);
  background: var(--ord-provider-soft);
  padding: 24px;
}

.path-step.connect {
  border-top-color: var(--ord-aggregator);
  background: var(--ord-aggregator-soft);
}

.path-step.discover {
  border-top-color: var(--ord-consumer);
  background: var(--ord-consumer-soft);
}

.path-step header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.number { color: var(--ord-faint); font-size: 13px; font-weight: 750; }
.role { color: var(--ord-muted); font-size: 12px; font-weight: 650; }
.path-step h3 { color: var(--ord-text); font-size: 25px; line-height: 1.15; }
.path-step p { color: var(--ord-muted); font-size: 17px; line-height: 1.4; }

.connector {
  position: relative;
  height: 2px;
  background: var(--ord-brand-2);
}

.connector::after {
  position: absolute;
  top: -5px;
  right: 0;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-left: 9px solid var(--ord-brand-2);
  content: "";
}

figcaption {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  align-items: center;
  gap: 28px;
  border: 1px solid var(--ord-teal-line);
  border-radius: var(--ord-radius);
  background: var(--ord-teal-soft);
  padding: 16px 20px;
}

figcaption div { display: flex; flex-direction: column; gap: 4px; }
figcaption span { color: var(--ord-brand); font-size: 11px; font-weight: 750; letter-spacing: 0.05em; text-transform: uppercase; }
figcaption strong { color: var(--ord-text); font-size: 17px; line-height: 1.3; }
figcaption p { border-left: 1px solid var(--ord-teal-line); color: var(--ord-muted); font-size: 14px; line-height: 1.35; padding-left: 28px; }
</style>
