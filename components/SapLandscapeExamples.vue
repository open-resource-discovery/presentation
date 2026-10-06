<script setup lang="ts">
const examples = [
  {
    kind: 'reference',
    label: 'Reference landscape · static',
    title: 'SAP Business Accelerator Hub',
    description: 'APIs, Events, Packages, and product documentation.',
    image: '/img/sap/business-accelerator-hub.png',
    alt: 'Annotated SAP Business Accelerator Hub screenshot showing an SAP S/4HANA Cloud product catalog with API Resources, Events, Packages, and other ORD concepts',
  },
  {
    kind: 'customer',
    label: 'Customer landscape · actual',
    title: 'BTP System Landscape',
    description: 'System instances, APIs, Events, and Consumption Bundles.',
    image: '/img/sap/btp-system-landscape.png',
    alt: 'Annotated BTP System Landscape screenshot showing system instances and system types, with a detail view for API Resources, Events, and Consumption Bundles',
  },
]
</script>

<template>
  <section class="sap-examples" aria-label="SAP reference catalog and customer landscape screenshots">
    <div class="screenshot-gallery">
      <figure v-for="example in examples" :key="example.kind" class="screenshot-panel" :class="example.kind">
        <figcaption class="screenshot-heading">
          <span>{{ example.label }}</span>
          <h3>{{ example.title }}</h3>
          <p>{{ example.description }}</p>
        </figcaption>
        <a class="screenshot-preview" :href="example.image" target="_blank" rel="noopener noreferrer" :aria-label="`Open full screenshot of ${example.title}`">
          <img :src="example.image" :alt="example.alt" />
        </a>
        <a class="full-screenshot-link" :href="example.image" target="_blank" rel="noopener noreferrer">View full screenshot ↗</a>
      </figure>
    </div>
    <p class="screenshot-source">Screenshots and annotations from the <a href="https://open-resource-discovery.org/introduction#ord-by-examples" target="_blank" rel="noopener noreferrer">ORD introduction ↗</a></p>
  </section>
</template>

<style scoped>
.sap-examples {
  display: flex;
  flex: 1;
  min-height: 0;
  flex-direction: column;
  gap: 16px;
}
.screenshot-gallery {
  display: grid;
  flex: 1;
  min-height: 0;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
}
.screenshot-panel {
  display: flex;
  min-height: 0;
  flex-direction: column;
  gap: 14px;
  margin: 0;
  border: 1px solid var(--ord-sep);
  border-top: 4px solid var(--ord-accent-sky);
  border-radius: var(--ord-radius);
  background: var(--ord-panel);
  padding: 20px;
}
.screenshot-panel.customer { border-top-color: var(--ord-accent-coral); }
.screenshot-heading { display: flex; flex-direction: column; gap: 8px; }
.screenshot-heading span { color: var(--ord-muted); font-size: 13px; font-weight: 700; letter-spacing: 0.035em; text-transform: uppercase; }
.screenshot-heading h3 { font-size: 24px; line-height: 1.2; }
.screenshot-heading p { color: var(--ord-muted); font-size: 17px; line-height: 1.35; }
.screenshot-preview {
  display: flex;
  flex: 1;
  min-height: 0;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 1px solid var(--ord-sep);
  border-radius: 5px;
  background: var(--ord-card-bg);
}
.screenshot-preview img { display: block; width: 100%; height: 100%; object-fit: contain; }
.full-screenshot-link { align-self: flex-end; border: 0; color: var(--ord-brand); font-size: 15px; font-weight: 650; text-decoration: underline; text-underline-offset: 3px; }
.screenshot-source { align-self: flex-end; color: var(--ord-faint); font-size: 13px; line-height: 1.4; }
.screenshot-source a { border: 0; color: var(--ord-brand); text-decoration: underline; text-underline-offset: 3px; }
</style>
