<template>
  <figure class="resolution-diagram" aria-label="ORD perspective resolution decision flow">
    <section class="request"><span>Consumer request</span><strong>Resolve the effective view for a system instance</strong></section>
    <div class="down">↓</div>
    <section class="decision"><strong>Is a complete <code>system-instance</code> perspective published?</strong></section>

    <div class="branches">
      <section class="branch yes">
        <span>Yes</span>
        <strong>Use only the runtime perspective</strong>
        <p>If an ORD ID is absent, it is unavailable on that instance. Do not fill it from static metadata.</p>
      </section>
      <section class="branch no">
        <span>No</span>
        <strong>Resolve the effective static view</strong>
        <p>Known tenant version: select that exact version. Otherwise, select the greatest published stable SemVer; if none is published, use system-type directly.</p>
        <div class="layers"><b>1 · system-version</b><i>if ID absent →</i><b>2 · system-type</b></div>
      </section>
    </div>

    <div class="rules">
      <p><strong>Complete representations.</strong> Never merge properties. A tombstone blocks fallback for that ORD ID.</p>
      <p><strong>Exact means exact.</strong> A missing specifically requested system version is an error, not a reason to substitute another version.</p>
      <p><strong>System-independent stays separate.</strong> Shared global content sits outside the fallback chain.</p>
    </div>
  </figure>
</template>

<style scoped>
.resolution-diagram { display: grid; flex: 1; grid-template-columns: 1fr 1fr; grid-template-rows: auto 18px auto auto auto; align-content: center; column-gap: 18px; margin: 0; }
.request, .decision { display: flex; grid-column: 1 / -1; align-items: center; justify-content: space-between; border: 1px solid var(--ord-sep); border-radius: var(--ord-radius); background: var(--ord-card-bg); padding: 14px 20px; }
.request { flex-direction: column; align-items: flex-start; gap: 4px; }
.request span { color: var(--ord-brand); font-size: 11px; font-weight: 750; text-transform: uppercase; }
.request strong { color: var(--ord-text); font-size: 18px; }
.down { position: relative; grid-column: 1 / -1; height: 18px; font-size: 0; line-height: 0; }
.down::before { position: absolute; top: -3px; bottom: 2px; left: 50%; width: 2px; margin-left: -1px; background: var(--ord-brand-2); content: ""; }
.down::after { position: absolute; bottom: -4px; left: 50%; transform: translateX(-50%); border-top: 7px solid var(--ord-brand-2); border-right: 5px solid transparent; border-left: 5px solid transparent; content: ""; }
.decision { justify-content: center; background: var(--ord-teal-soft); }
.decision strong { color: var(--ord-text); font-size: 18px; }
.decision code { background: transparent; color: var(--ord-brand); font-family: inherit; font-size: inherit; padding: 0; }
.branches { display: grid; grid-column: 1 / -1; grid-template-columns: 1fr 1fr; gap: 18px; padding-top: 18px; }
.branch { display: flex; flex-direction: column; gap: 10px; border: 1px solid var(--ord-sep); border-top: 4px solid var(--ord-accent-coral); border-radius: var(--ord-radius); background: var(--ord-accent-coral-bg); padding: 20px; }
.branch.no { border-top-color: var(--ord-accent-sky);  background: var(--ord-accent-sky-bg); }
.branch > span { color: #bd4c36; font-size: 11px; font-weight: 750; text-transform: uppercase; }
.branch.no > span { color: #2869a8; }
.branch > strong { color: var(--ord-text); font-size: 19px; }
.branch p { color: var(--ord-muted); font-size: 14px; line-height: 1.4; }
.layers { display: grid; grid-template-columns: 1fr auto 1fr; gap: 8px; align-items: center; margin-top: auto; }
.layers b { border: 1px solid var(--ord-border); border-radius: 5px; background: var(--ord-pill-bg); color: var(--ord-text); font-size: 12px; padding: 10px; text-align: center; }
.layers i { color: var(--ord-faint); font-size: 10px; font-style: normal; text-align: center; }
.rules { display: grid; grid-column: 1 / -1; grid-template-columns: repeat(3, 1fr); gap: 12px; padding-top: 16px; }
.rules p { border-left: 3px solid var(--ord-brand-2); color: var(--ord-muted); font-size: 14px; line-height: 1.38; padding: 3px 10px; }
.rules strong { color: var(--ord-text); }
</style>
