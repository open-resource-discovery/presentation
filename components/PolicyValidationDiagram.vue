<template>
  <figure
    class="policy-validation-diagram"
    aria-label="A stable ORD schema gate establishes baseline validity. Providers declare multiple independently owned and versioned policies through policyLevels and validate them locally or in CI before publishing. Policy owners can add or version policies, and providers can compare the same content against current and next policy versions before changing their declared target."
  >
    <section class="stage baseline">
      <span class="step">01 · Baseline</span>
      <h3>Gate on validity</h3>
      <div class="baseline-check" aria-hidden="true">
        <span class="checkmark">✓</span>
        <div>
          <b>ORD schema</b>
          <span>Structure · types · required fields</span>
        </div>
      </div>
      <div class="gate-label"><span>Publishing gate</span><b>must pass</b></div>
      <p>Start with one predictable acceptance rule for every document.</p>
    </section>

    <span class="flow" aria-hidden="true">→</span>

    <section class="stage declare">
      <span class="step">02 · Provider contract</span>
      <h3>Declare the policies</h3>
      <code class="policy-code">
        <span><b>"policyLevels"</b>: [</span>
        <span class="policy-value"><i>"catalog.example:quality:v2"</i>,</span>
        <span class="policy-value"><i>"ai.example:readiness:v1"</i></span>
        <span>]</span>
      </code>
      <div class="shift-left">
        <b>Like a shared linter config</b>
        <span>Provider local / CI</span>
        <span class="mini-flow" aria-hidden="true">→</span>
        <span>Publish</span>
      </div>
      <p>Document defaults apply to its resources; packages or resources can override them.</p>
    </section>

    <span class="flow" aria-hidden="true">→</span>

    <section class="stage evolve">
      <span class="step">03 · Evolve</span>
      <h3>Grow governance safely</h3>
      <p class="owner-intro">Independent concerns can have independent owners and versions.</p>
      <div class="policy-track">
        <span class="owner">Catalog group</span>
        <b>Quality</b>
        <span class="version old">v1</span>
        <span class="track-flow" aria-hidden="true">→</span>
        <span class="version current">v2</span>
      </div>
      <div class="policy-track">
        <span class="owner">AI group</span>
        <b>Readiness</b>
        <span class="new-policy">new policy</span>
        <span class="version current">v1</span>
      </div>
      <div class="compare">
        <b>Compare before adopting</b>
        <span>Run the same content against current and next policies to expose new gaps.</span>
      </div>
    </section>

    <figcaption>
      <strong>Evolvable validation for governance:</strong>
      a stable baseline, an explicit policy portfolio, and visible impact before expectations change.
    </figcaption>
  </figure>
</template>

<style scoped>
.policy-validation-diagram {
  display: grid;
  flex: 1;
  min-height: 0;
  grid-template-columns: .9fr 34px 1.12fr 34px 1.18fr;
  grid-template-rows: 1fr auto;
  gap: 16px 10px;
  align-items: stretch;
  margin: 0;
}

.stage {
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: 11px;
  border: 1px solid var(--ord-sep);
  border-top: 5px solid var(--stage-color);
  border-radius: var(--ord-radius);
  background: var(--stage-bg);
  padding: 20px 18px;
}

.baseline { --stage-color: var(--ord-provider); --stage-bg: var(--ord-provider-soft); }
.declare { --stage-color: var(--ord-brand); --stage-bg: var(--ord-accent-teal-bg); }
.evolve { --stage-color: var(--ord-aggregator); --stage-bg: var(--ord-aggregator-soft); }

.step {
  color: var(--stage-color);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: .08em;
  text-transform: uppercase;
}

.stage h3 { font-size: 22px; line-height: 1.15; }

.stage p,
.baseline-check span,
.shift-left span,
.compare span {
  color: var(--ord-muted);
  font-size: 14px;
  line-height: 1.35;
}

.baseline-check {
  display: flex;
  align-items: center;
  gap: 12px;
  border: 1px solid var(--ord-sep);
  border-radius: 7px;
  background: var(--ord-panel);
  padding: 15px 13px;
}

.baseline-check > div { display: flex; min-width: 0; flex-direction: column; gap: 3px; }
.baseline-check b { color: var(--ord-text); font-size: 17px; }

.checkmark {
  display: grid;
  width: 36px;
  height: 36px;
  flex: 0 0 36px;
  place-items: center;
  border-radius: 50%;
  background: var(--ord-provider);
  color: white !important;
  font-size: 21px !important;
  font-weight: 800;
}

.gate-label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  background: color-mix(in srgb, var(--ord-provider) 11%, white);
  color: var(--ord-text);
  font-size: 13px;
  padding: 9px 11px;
}

.gate-label b { color: var(--ord-provider); text-transform: uppercase; }

.stage code {
  display: grid;
  gap: 1px;
  border: 1px solid var(--ord-border);
  border-radius: 6px;
  background: var(--ord-panel);
  color: var(--ord-text);
  font-family: var(--ord-mono);
  font-size: 11px;
  line-height: 1.4;
  padding: 11px 10px;
}

.stage code b { color: var(--ord-provider); font-weight: 700; }
.stage code i { color: var(--ord-brand); font-style: normal; }
.policy-value { padding-left: 13px; }

.shift-left {
  display: grid;
  grid-template-columns: 1fr auto auto auto;
  gap: 6px;
  align-items: center;
  border: 1px solid var(--ord-sep);
  border-radius: 6px;
  background: var(--ord-panel);
  padding: 9px 10px;
}

.shift-left b { grid-column: 1 / -1; color: var(--ord-text); font-size: 14px; }
.mini-flow,
.track-flow { color: var(--ord-brand) !important; font-weight: 800; }
.owner-intro { margin-bottom: 1px; }

.policy-track {
  display: grid;
  grid-template-columns: 1fr auto auto auto;
  gap: 6px;
  align-items: center;
  border: 1px solid var(--ord-sep);
  border-radius: 6px;
  background: var(--ord-panel);
  padding: 9px 10px;
}

.policy-track .owner {
  grid-column: 1 / -1;
  color: var(--ord-muted);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .04em;
  text-transform: uppercase;
}

.policy-track b { color: var(--ord-text); font-size: 14px; }

.version,
.new-policy {
  border-radius: 999px;
  font-size: 11px;
  font-weight: 800;
  padding: 3px 7px;
}

.version.old { background: var(--ord-soft); color: var(--ord-muted); }
.version.current { background: var(--ord-aggregator); color: white; }
.new-policy { background: var(--ord-accent-coral-bg); color: var(--ord-text); }

.compare {
  display: flex;
  flex-direction: column;
  gap: 3px;
  border-left: 4px solid var(--ord-aggregator);
  border-radius: 5px;
  background: color-mix(in srgb, var(--ord-aggregator) 8%, white);
  padding: 9px 11px;
}

.compare b { color: var(--ord-text); font-size: 14px; }

.flow {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--ord-brand);
  font-size: 28px;
  font-weight: 800;
}

figcaption {
  grid-column: 1 / -1;
  border-left: 5px solid var(--ord-accent-coral);
  border-radius: 5px;
  background: var(--ord-accent-coral-bg);
  color: var(--ord-muted);
  font-size: 15px;
  line-height: 1.35;
  padding: 12px 17px;
}

figcaption strong { color: var(--ord-text); }
</style>
