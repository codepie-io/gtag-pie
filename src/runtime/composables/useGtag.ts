import { gtag } from '../gtag'
import type { Gtag } from '../types'
// @ts-ignore
import { useRuntimeConfig } from '#app'

export function useGtag(): Gtag {
  const { gtag: { id } } = useRuntimeConfig().public

  // @ts-ignore
  if (!id || process.server)
    return () => {}

  return gtag
}
