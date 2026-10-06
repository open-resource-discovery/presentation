<script setup lang="ts">
import { assetUrl } from '../utils/asset-url'
</script>

<template>
  <a class="closing-qr" href="https://open-resource-discovery.org/" target="_blank" rel="noreferrer">
    <span>Scan to explore ORD</span>
    <img :src="assetUrl('img/ord-website-qr.svg')" alt="QR code for open-resource-discovery.org">
    <small>open-resource-discovery.org</small>
  </a>
</template>
