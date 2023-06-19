// @ts-ignore
import { defineNuxtPlugin, useHead, useRuntimeConfig } from '#app'
import { gtagPie } from './gtag-pie'

export default defineNuxtPlugin(() => {
  const {
    gtag: { id, config, initialConsent, loadingStrategy },
  } = useRuntimeConfig().public

  if (!id)
    return

  // @ts-expect-error: `dataLayer` is not defined
  window.dataLayer = window.dataLayer || []

  gtagPie('js', new Date())
  gtagPie('config', id, config)

  if (!initialConsent)
    return

  // Sanitize loading strategy to be either `async` or `defer`
  const strategy = loadingStrategy === 'async' ? 'async' : 'defer'

  useHead({
    script: [
      {
        src: `https://www.googletagmanager.com/gtag/js?id=${id}`,
        [strategy]: true,
      },
    ],
  })
})
