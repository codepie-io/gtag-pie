import { gtagPie } from '../gtag-pie'
import type { GtagPie } from '../types'
// @ts-ignore
import { useRuntimeConfig } from '#app'

export function useGtagPie(): GtagPie {
  const { gtag: { id } } = useRuntimeConfig().public

  // @ts-ignore
  if (!id || process.server)
    return () => {}

  return gtagPie
}
