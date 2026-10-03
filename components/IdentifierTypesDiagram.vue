<template>
  <figure class="identifier-types" aria-label="Comparison of ORD IDs, correlation IDs, and specification IDs">
    <div class="identifier-grid">
      <section class="identifier-card ord-id">
        <header>
          <span>Identity inside ORD</span>
          <h3>ORD ID</h3>
          <p>What ORD resource or taxonomy item is this?</p>
        </header>
        <code>example.catalog:apiResource:Orders:v2</code>
        <ul>
          <li>Stable identity for information described by ORD</li>
          <li>Uses a fixed ORD concept name</li>
          <li>Major version marks an incompatible generation</li>
        </ul>
      </section>

      <section class="identifier-card correlation-id">
        <header>
          <span>Identity outside ORD</span>
          <h3>Correlation ID</h3>
          <p>Which external record is this the same as?</p>
        </header>
        <code>example.crm:record:Customer/4711</code>
        <ul>
          <li>Maps to a system-of-record identifier</li>
          <li>Stored in <code>correlationIds</code></li>
          <li>No separate version fragment</li>
        </ul>
      </section>

      <section class="identifier-card specification-id">
        <header>
          <span>Shared behavior</span>
          <h3>Specification ID</h3>
          <p>Which standard or strategy should be implemented?</p>
        </header>
        <code>ord:overlay:v1</code>
        <ul>
          <li>Names a standard, procedure, or guideline</li>
          <li>Used by extensible types, strategies, and policy levels</li>
          <li>Major version marks incompatible specification changes</li>
        </ul>
      </section>
    </div>

    <figcaption>
      <strong>If the target is already described by ORD, reference its ORD ID.</strong>
      <span>Use a correlation ID only for an external identity or mapping.</span>
    </figcaption>
  </figure>
</template>

<style scoped>
.identifier-types {
  display: flex;
  min-height: 0;
  flex: 1;
  flex-direction: column;
  gap: 14px;
  margin: 0;
}

.identifier-grid {
  display: grid;
  min-height: 0;
  flex: 1;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}

.identifier-card {
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: 15px;
  border: 1px solid var(--ord-sep);
  border-top: 4px solid var(--ord-brand-2);
  border-radius: var(--ord-radius);
  background: var(--ord-card-bg);
  padding: 20px 21px;
}

.correlation-id { border-top-color: var(--ord-sky); }
.specification-id { border-top-color: #9b7cff; }

.identifier-card header {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.identifier-card header > span {
  color: var(--ord-brand);
  font-size: 11px;
  font-weight: 750;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.correlation-id header > span { color: #2869a8; }
.specification-id header > span { color: #6f4ad6; }

.identifier-card h3 {
  font-size: 24px;
}

.identifier-card header p {
  min-height: 44px;
  color: var(--ord-muted);
  font-size: 16px;
  font-weight: 600;
  line-height: 1.32;
}

.identifier-card > code {
  display: flex;
  min-height: 58px;
  align-items: center;
  overflow-wrap: anywhere;
  border-radius: 6px;
  background: var(--ord-panel-soft);
  color: var(--ord-text);
  font-family: var(--ord-mono);
  font-size: 13px;
  line-height: 1.35;
  padding: 11px 12px;
}

.identifier-card ul {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.identifier-card li {
  position: relative;
  color: var(--ord-muted);
  font-size: 14px;
  line-height: 1.35;
  padding-left: 18px;
}

.identifier-card li::before {
  position: absolute;
  top: 0.48em;
  left: 0;
  width: 7px;
  height: 7px;
  border-radius: 999px;
  background: var(--ord-brand-2);
  content: '';
}

.correlation-id li::before { background: var(--ord-sky); }
.specification-id li::before { background: #9b7cff; }

.identifier-card li code {
  color: var(--ord-text);
  font-size: 12px;
}

figcaption {
  display: flex;
  align-items: center;
  gap: 12px;
  border-left: 4px solid var(--ord-brand-2);
  border-radius: 0 var(--ord-radius) var(--ord-radius) 0;
  background: var(--ord-teal-soft);
  color: var(--ord-muted);
  font-size: 15px;
  line-height: 1.35;
  padding: 13px 17px;
}

figcaption strong {
  color: var(--ord-text);
}
</style>
