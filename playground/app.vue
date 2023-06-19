<script setup lang="ts">
import { ref } from 'vue'
import { useGtag, useGtagConsent, useGtagTrackEvent } from "#imports";

const { gtag: gtagOpts } = useRuntimeConfig().public

const gtag = useGtag()
const consent = ref(gtagOpts.initialConsent)

function logGtagFn() {
  // eslint-disable-next-line no-console
  console.log('Use the "gtag" function to send custom events', gtag)
}

function toggleConsent() {
  useGtagConsent(!consent.value)
  consent.value = !consent.value
}

function trackEvent() {
  useGtagTrackEvent('share')
}
</script>

<template>
  <Head>
    <Title>@codepie/gtag-pie - A powerful and easy-to-use module for integrating Google Analytics functionality into Nuxt 3 applications.</Title>
  </Head>

  <header>
    <h1>gtag-pie</h1>
  </header>

  <h3>Configuration</h3>
  <details>
    <summary>Public Runtime Options</summary>
    <pre>{{ JSON.stringify(gtagOpts, null, 2) }}</pre>
  </details>

  <h3>Consent</h3>
  <p>
    <mark>{{ consent ? 'Consent granted' : 'Consent denied' }}</mark>
  </p>

  <h3>Composables</h3>
  <button @click="logGtagFn">
    useGtag
  </button>
  <button @click="toggleConsent">
    useGtagConsent
  </button>
  <button @click="trackEvent">
    useTrackEvent
  </button>
</template>
