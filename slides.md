---
theme: default
title: Open Resource Discovery
info: |
  A compact public introduction to the Open Resource Discovery specification.
colorSchema: dark
canvasWidth: 1280
aspectRatio: 16/9
transition: fade
drawings:
  enabled: false
---

<CoverSlide></CoverSlide>

---

<div class="slide-shell light-slide">
<DeckLogo></DeckLogo>
<header class="slide-header">
<p class="eyebrow">Motivation</p>
<h2>Why ORD?</h2>
</header>
<div class="point-grid">
<section class="point-card">
<span class="point-marker">01</span>
<h3>Consistent technical documentation</h3>
<p>Applications and services need a consistent way to document how they can be integrated with and developed against.</p>
</section>
<section class="point-card">
<span class="point-marker">02</span>
<h3>Actual system landscapes</h3>
<p>Companies and customers need to understand real landscapes, including customizations and extensions.</p>
</section>
<section class="point-card">
<span class="point-marker">03</span>
<h3>Automation and developer experience</h3>
<p>ORD supports more automation and a better development experience for integration across SAP, BTP, ecosystem, and side-by-side extensions.</p>
</section>
<section class="point-card">
<span class="point-marker">04</span>
<h3>Standardized metadata</h3>
<p>Many AI and analytics use cases rely on consistent, standardized metadata to deliver value or scale well.</p>
</section>
</div>
</div>

---

<div class="slide-shell split-slide light-slide">
<DeckLogo></DeckLogo>
<section class="text-column">
<p class="eyebrow">Protocol</p>
<h2>The protocol shape</h2>
<ul class="statement-list">
<li>ORD provides a single entry point that can be used to discover and crawl relevant metadata.</li>
<li>It can describe static documentation and tenant-specific configuration or extensions at run time.</li>
<li>It describes the bigger context: shared high-level information, taxonomy, and relations between resources.</li>
<li>It does not replace detailed standards like OpenAPI. It can discover and pass along those metadata documents.</li>
</ul>
</section>
<section class="diagram-column">
<ProviderDiagram></ProviderDiagram>
</section>
</div>

---

<div class="slide-shell light-slide">
<DeckLogo></DeckLogo>
<header class="slide-header">
<p class="eyebrow">Metadata integration</p>
<h2>Alignment changes the integration model</h2>
<p class="slide-subtitle">ORD aligns metadata description and discovery so providers and consumers can connect through a shared contract instead of point-to-point agreements.</p>
</header>
<AlignmentDiagram></AlignmentDiagram>
</div>

---

<div class="slide-shell split-slide light-slide">
<DeckLogo></DeckLogo>
<section class="text-column">
<p class="eyebrow">Information model</p>
<h2>High-level data model</h2>
<ul class="statement-list">
<li>The most typical resources are APIs and Events.</li>
<li>ORD also supports Entity Types, Data Products, Integration Dependencies, and Capabilities.</li>
<li>Packages, Consumption Bundles, taxonomy attributes, and relations help connect these concepts.</li>
<li>Combined by an ORD aggregator, this information can become a connected system landscape metadata view.</li>
</ul>
</section>
<section class="diagram-column">
<DataModelDiagram></DataModelDiagram>
</section>
</div>

---

<div class="slide-shell end-slide light-slide">
<DeckLogo></DeckLogo>
<section class="end-copy">
<p class="eyebrow">Read next</p>
<h2>A shared contract for resource discovery</h2>
<p class="lead small">Start with the ORD introduction, then follow the specification pages for the discovery behavior, document model, and resource interfaces.</p>
<div class="next-grid">
<a href="https://open-resource-discovery.github.io/specification/introduction" target="_blank">ORD introduction</a>
<a href="https://open-resource-discovery.github.io/specification/spec-v1/" target="_blank">Specification v1</a>
<a href="https://ord-reference-application.cfapps.sap.hana.ondemand.com/" target="_blank">Reference application</a>
</div>
</section>
</div>
