<template>
  <figure class="visibility-diagram" aria-label="ORD metadata visibility and resource-definition visibility rules">
    <div class="audiences">
      <section class="public"><span>Public</span><strong>Anyone</strong><small>Customers, partners, and unauthenticated external consumers</small></section>
      <section class="internal"><span>Internal</span><strong>Vendor-internal</strong><small>Only consumers with the required internal permissions</small></section>
      <section class="private"><span>Private</span><strong>Deployment scope</strong><small>Not discoverable outside the application or service scope</small></section>
      <div class="restriction">more restrictive →</div>
    </div>

    <section class="definition-rule">
      <div>
        <span class="rule-label">Resource visibility</span>
        <strong>Who may discover that the resource exists?</strong>
      </div>
      <div class="arrow">→</div>
      <div>
        <span class="rule-label">Definition visibility</span>
        <strong>Same audience or a more restrictive one</strong>
      </div>
      <div class="examples">
        <span><b>public resource</b><i>public · internal · private definitions</i></span>
        <span><b>internal resource</b><i>internal · private definitions</i></span>
        <span><b>private resource</b><i>private definitions only</i></span>
      </div>
    </section>

    <figcaption><strong>Metadata visibility is not runtime authorization.</strong> Access strategies protect metadata retrieval; API or event access is governed separately.</figcaption>
  </figure>
</template>

<style scoped>
.visibility-diagram { display: grid; flex: 1; min-height: 0; grid-template-columns: 1.1fr .9fr; gap: 18px; margin: 0; }
.audiences { position: relative; display: flex; flex-direction: column; justify-content: center; gap: 12px; padding-bottom: 24px; }
.audiences section { display: grid; grid-template-columns: 100px 150px 1fr; align-items: center; gap: 14px; min-height: 92px; border: 1px solid var(--ord-border); border-radius: var(--ord-radius); padding: 15px 18px; }
.audiences section.public { width: 100%; border-left: 5px solid var(--ord-brand-2); background: var(--ord-teal-soft); }
.audiences section.internal { width: 88%; margin-left: 12%; border-left: 5px solid var(--ord-sky); background: var(--ord-sky-soft); }
.audiences section.private { width: 76%; margin-left: 24%; border-left: 5px solid #9b7cff; background: rgba(155,124,255,.08); }
.audiences section > span { color: var(--ord-brand); font-size: 12px; font-weight: 800; letter-spacing: .06em; text-transform: uppercase; }
.audiences strong { color: var(--ord-text); font-size: 18px; }
.audiences small { color: var(--ord-muted); font-size: 12px; line-height: 1.35; }
.restriction { position: absolute; right: 0; bottom: 0; color: var(--ord-faint); font-size: 10px; font-weight: 700; letter-spacing: .05em; text-transform: uppercase; }
.definition-rule { display: flex; flex-direction: column; justify-content: center; gap: 14px; border: 1px solid var(--ord-sep); border-radius: var(--ord-radius); background: var(--ord-card-bg); padding: 22px; }
.definition-rule > div:not(.arrow):not(.examples) { display: flex; flex-direction: column; gap: 7px; }
.rule-label { color: var(--ord-brand); font-size: 11px; font-weight: 800; letter-spacing: .05em; text-transform: uppercase; }
.definition-rule strong { color: var(--ord-text); font-size: 18px; line-height: 1.25; }
.arrow { color: var(--ord-brand); font-size: 28px; transform: rotate(90deg); text-align: center; }
.examples { display: flex; flex-direction: column; gap: 8px; border-top: 1px solid var(--ord-sep); padding-top: 14px; }
.examples span { display: grid; grid-template-columns: 125px 1fr; gap: 8px; }
.examples b { color: var(--ord-text); font-size: 11px; }
.examples i { color: var(--ord-muted); font-size: 11px; font-style: normal; }
figcaption { grid-column: 1 / -1; border-radius: var(--ord-radius); background: var(--ord-panel); color: var(--ord-muted); font-size: 13px; padding: 13px 17px; text-align: center; }
figcaption strong { color: var(--ord-brand-3); }
</style>
