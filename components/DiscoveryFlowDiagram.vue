<template>
  <figure class="discovery-flow" aria-label="ORD pull discovery flow">
    <div class="steps">
      <section class="step known">
        <span class="number">01</span>
        <strong>Know the system</strong>
        <small>Base URL or registered endpoint</small>
      </section>
      <i></i>
      <section class="step config">
        <span class="number">02</span>
        <strong>Read ORD config</strong>
        <code>/.well-known/<br />open-resource-discovery</code>
      </section>
      <i></i>
      <section class="step document">
        <span class="number">03</span>
        <strong>Fetch documents</strong>
        <small>Perspectives, resources, taxonomy</small>
      </section>
      <i></i>
      <section class="step definitions">
        <span class="number">04</span>
        <strong>Follow definitions</strong>
        <small>OpenAPI, AsyncAPI, A2A, and more</small>
      </section>
    </div>

    <div class="result">
      <span>Repeatable crawl</span>
      <strong>High-level context and detailed contracts stay linked</strong>
    </div>
  </figure>
</template>

<style scoped>
.discovery-flow {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  margin: 0;
}

.steps {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 54px minmax(0, 1.16fr) 54px minmax(0, 1fr) 54px minmax(0, 1fr);
  align-items: center;
}

.step {
  display: grid;
  min-height: 232px;
  grid-template-rows: 22px 50px 1fr;
  gap: 13px;
  border: 1px solid var(--ord-sep);
  border-top: 4px solid var(--ord-accent-sky);
  border-radius: var(--ord-radius);
  background: var(--ord-accent-sky-bg);
  padding: 24px 22px;
}

.step.config { border-top-color: var(--ord-accent-teal); background: var(--ord-accent-teal-bg); }
.step.document { border-top-color: var(--ord-accent-violet); background: var(--ord-accent-violet-bg); }
.step.definitions { border-top-color: var(--ord-accent-coral); background: var(--ord-accent-coral-bg); }

.number {
  color: var(--ord-faint);
  font-family: var(--ord-font);
  font-size: 14px;
  font-weight: 700;
}
.step strong { color: var(--ord-text); font-size: 21px; line-height: 1.18; }
.step small { color: var(--ord-muted); font-size: 16px; line-height: 1.35; }
.step code { align-self: start; background: var(--ord-pill-bg); color: var(--ord-brand); font-size: 13px; line-height: 1.45; overflow-wrap: anywhere; padding: 4px 6px; border-radius: 4px; }

.steps > i { position: relative; height: 2px; background: var(--ord-brand-2); }
.steps > i::after {
  position: absolute;
  top: -5px;
  right: 0;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-left: 9px solid var(--ord-brand-2);
  content: "";
}

.result {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid var(--ord-teal-line);
  border-radius: var(--ord-radius);
  background: var(--ord-teal-soft);
  padding: 18px 24px;
}
.result span { color: var(--ord-brand); font-family: var(--ord-font); font-size: 13px; font-weight: 700; text-transform: uppercase; }
.result strong { color: var(--ord-text); font-size: 19px; }
</style>
