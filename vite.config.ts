import { defineConfig } from 'vite'

const referenceApp = 'https://ord-reference-application.cfapps.sap.hana.ondemand.com'

export default defineConfig({
  server: {
    proxy: {
      '/ord-reference': {
        target: referenceApp,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/ord-reference/, ''),
      },
    },
  },
})
