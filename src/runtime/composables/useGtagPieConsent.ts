// @ts-ignore
import { useHead, useRuntimeConfig } from '#app'

export function useGtagPieConsent(hasConsent: boolean) {
  const { gtag: { id } } = useRuntimeConfig().public

  // @ts-ignore
  if (process.server || !('dataLayer' in window))
    return

  // The first two `dataLayer` items are typically the `js` and `config` commands
  // that are called during the plugin initialization. Therefore, if the `dataLayer`
  // has more than two items, it is considered to be initialized.
  const isInitialized = (window as any).dataLayer.length > 2

  if (hasConsent) {
    if (!isInitialized) {
      useHead({
        script: [{ src: `https://www.googletagmanager.com/gtag/js?id=${id}` }],
      })
    }
    else {
      // Re-enable Google Analytics
      disableGtagPie(false, id)
    }
    return
  }

  disableGtagPie(true, id)
}

/**
 * Disable Google Analytics with GDPR compliance
 *
 * @see https://developers.google.com/analytics/devguides/collection/gtagjs/user-opt-out
 */
function disableGtagPie(value: boolean, id: string) {
  (window as any)[`ga-disable-${id}`] = value
}
