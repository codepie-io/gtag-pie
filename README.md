# @codepie/gtag-pie

[![npm version](https://img.shields.io/npm/v/@codepie/gtag-pie)](https://www.npmjs.com/package/@codepie/gtag-pie)
[![License](https://img.shields.io/npm/l/@codepie/gtag-pie)](https://github.com/codepie-io/gtag-pie/blob/main/LICENSE)

A powerful and lightweight module for integrating Google Analytics (gtag) functionality into Nuxt 3 applications. Easily track page views, events, and gain valuable insights into user behavior with simplicity and flexibility.

## Features

- 🌻  **No dependencies:** @codepie/gtag-pie leverages the power of Google's gtag.js library without any additional dependencies, keeping your project lightweight.
- 🤝 **Manual consent management for GDPR compliance:** Ensure GDPR compliance by managing user consent manually, giving you full control over when and how tracking is enabled.
- 📯 **Track events manually with composables:** Utilize composables to track custom events and interactions within your Nuxt 3 application, allowing for granular tracking tailored to your needs.
- 🦾 **SSR-ready:** Seamlessly handle server-side rendering (SSR) scenarios without any extra configuration or setup.
- 📂 **.env file support:** Conveniently store your Google Analytics tracking ID and configuration options in a .env file, making it easy to manage and switch between environments.

## Installation

Install the package using your preferred package manager. Here's an example using npm:

```shell
# Using pnpm
pnpm add -D @codepie/gtag-pie
```

## Baisc Usage

1. Configure the module in your Nuxt 3 project's **`nuxt.config.ts`** file:

```ts
// nuxt.config.ts

export default {
  modules: [
    '@codepie/gtag-pie',
  ],
  gtagPie: {
    id: 'YOUR_GTAG_ID',
    config: {
      // Additional gtag.js options
    }
  },
}
```
Replace **`YOUR_GTAG_ID`** with your actual Google Analytics Tracking ID. You can find this ID in your Google Analytics dashboard.

> **Note: Ensure Enhanced Measurement is Enabled**
>
> To enable automatic page view tracking in your Single Page Application with GA4, make sure to enable the **Enhanced Measurement** feature. Follow these steps:
>
> 1. Go to your Google Analytics 4 account and navigate to "Admin" > "Data Streams" > "Web" > "Enhanced measurement settings."
> 2. In the "Enhanced measurement settings" section, ensure that the toggle for "Page views" is enabled.
>
> Enabling the "Page views" toggle allows GA4 to track page changes based on browser history events in your Single Page Application, providing you with accurate and comprehensive data.
>
> Please ensure you have this feature enabled to make the most out of GA4 page tracking in your application.
