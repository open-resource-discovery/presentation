import { defineRoutesSetup } from '@slidev/types'

export default defineRoutesSetup((routes) => {
  routes.push({
    path: '/self-description-examples',
    redirect: to => ({ path: '/self-description', query: to.query, hash: to.hash }),
  })
  return routes
})
