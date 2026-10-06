import type { AppContext } from '@slidev/types'
import type { RouteLocationRaw } from 'vue-router'

const base = import.meta.env.BASE_URL.replace(/\/$/, '')

function withoutDuplicateBase(location: RouteLocationRaw): RouteLocationRaw {
  if (!base || base === '/')
    return location

  if (typeof location === 'string')
    return location.startsWith(`${base}/`) ? location.slice(base.length) : location

  if (typeof location.path === 'string' && location.path.startsWith(`${base}/`)) {
    return {
      ...location,
      path: location.path.slice(base.length),
    }
  }

  return location
}

export default ({ router }: AppContext) => {
  const push = router.push.bind(router)
  const replace = router.replace.bind(router)

  router.push = location => push(withoutDuplicateBase(location))
  router.replace = location => replace(withoutDuplicateBase(location))
}
