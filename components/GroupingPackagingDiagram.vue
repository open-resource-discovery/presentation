<template>
  <figure class="grouping-diagram" aria-label="ORD grouping concepts with their concerns and resource assignments">
    <table>
      <thead><tr><th>Concept</th><th>What concern does it express?</th><th>Resource assignment</th><th>Reference</th></tr></thead>
      <tbody>
        <tr class="mandatory"><th>Package <small>required</small></th><td>Publishing ownership, shared metadata, catalog presentation</td><td>Every resource → exactly 1</td><td><code>partOfPackage</code></td></tr>
        <tr><th>Product</th><td>Software portfolio or service offering</td><td>Package / resource → 0..n</td><td><code>partOfProducts</code></td></tr>
        <tr><th>Consumption Bundle</th><td>APIs and Events accessible with the same credentials and auth mechanism</td><td>API / Event → 0..n</td><td><code>partOfConsumptionBundles</code></td></tr>
        <tr><th>Entity Type</th><td>Shared business object or domain semantics</td><td>API / Event → 0..n</td><td><code>exposedEntityTypes</code></td></tr>
        <tr><th>Group</th><td>Custom, governed taxonomy defined by a Group Type</td><td>Resource → 0..n</td><td><code>partOfGroups</code></td></tr>
      </tbody>
    </table>
    <div class="group-example">
      <div><small>ORD resource</small><strong>Sales API</strong></div><span aria-label="assigned to">→</span>
      <div><small>Group</small><strong>Order to cash</strong></div><span aria-label="group type">→</span>
      <div><small>Group Type</small><strong>Business process</strong></div>
      <p>Publish both the group and its semantics so consumers can understand the assignment.</p>
    </div>
    <figcaption><p><b>Tags</b> add keywords; <b>labels</b> add queryable key-value metadata. Resources inherit shared metadata from their Package.<br>ORD documents are transport containers. Namespaces govern identity; use groups for flexible taxonomy.</p><a href="https://open-resource-discovery.org/spec-v1/concepts/grouping-and-bundling" target="_blank" rel="noopener noreferrer">Specification ↗</a></figcaption>
  </figure>
</template>

<style scoped>
.grouping-diagram { display: flex; flex: 1; flex-direction: column; justify-content: center; gap: 20px; margin: 0; }
table { width: 100%; border-spacing: 0; border-collapse: separate; border: 1px solid var(--ord-sep); border-radius: var(--ord-radius); overflow: hidden; background: var(--ord-card-bg); font-size: 15px; line-height: 1.35; }
th, td { border-bottom: 1px solid var(--ord-sep); padding: 14px 16px; text-align: left; vertical-align: middle; }
thead th { background: var(--ord-panel-soft); color: var(--ord-faint); font-size: 11px; font-weight: 750; text-transform: uppercase; letter-spacing: .03em; }
tbody th { width: 200px; color: var(--ord-text); font-weight: 700; }
td { color: var(--ord-muted); }
td:nth-child(3) { width: 235px; white-space: nowrap; }
td:last-child { width: 250px; }
tbody tr:last-child :is(th, td) { border-bottom: 0; }
.mandatory { background: var(--ord-accent-teal-bg); }
th small { display: inline-block; margin-left: 6px; color: var(--ord-brand); font-size: 10px; text-transform: uppercase; }
.grouping-diagram td > code { border: 1px solid var(--ord-sep); background: var(--ord-pill-bg); color: var(--ord-brand); font-size: 12px; padding: 3px 5px; }
.group-example { display: flex; align-items: center; gap: 20px; border: 1px solid var(--ord-sep); border-radius: var(--ord-radius); padding: 16px 20px; }
.group-example div { flex: 1; min-width: 0; }
.group-example small { display: block; color: var(--ord-faint); font-size: 11px; text-transform: uppercase; font-weight: 750; margin-bottom: 5px; }
.group-example strong { color: var(--ord-text); font-size: 18px; }
.group-example > span { color: var(--ord-brand); font-size: 24px; }
.group-example p { flex: 1.4; color: var(--ord-muted); font-size: 14px; line-height: 1.4; border-left: 1px solid var(--ord-sep); padding-left: 20px; }
figcaption { display: flex; align-items: center; justify-content: space-between; gap: 20px; color: var(--ord-muted); font-size: 14px; line-height: 1.5; }
figcaption b { color: var(--ord-text); }
figcaption a { flex-shrink: 0; border: 0; color: var(--ord-brand); font-size: 12px; }
</style>
