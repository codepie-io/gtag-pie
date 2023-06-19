import {defineNuxtModule, addPlugin, createResolver, addImportsDir} from '@nuxt/kit'
import { defu } from 'defu'
// @ts-ignore
import { name, version } from '../package.json'

// Module options TypeScript interface definition
export interface ModuleOptions {
  /**
   * The Google Analytics 4 property ID to use for tracking
   *
   * @default undefined
   */
  id?: string

  /**
   * Additional configuration for the Google Analytics 4 property
   *
   * @remarks
   * Will be set when initializing `gtag` with the `config` command
   *
   * @default undefined
   */
  config?: Record<string, any>

  /**
   * Whether to initially consent to tracking
   *
   * @remarks
   * If set to `true`, the Google Analytics 4 script will be loaded immediately
   *
   * @default true
   */
  initialConsent?: boolean

  /**
   * Whether to load the Google Analytics 4 script asynchronously or defer its loading
   *
   * @remarks
   * If set to `async`, the script will be loaded asynchronously.
   * If set to `defer`, the script will be loaded with the `defer` attribute.
   *
   * @default 'defer'
   */
  loadingStrategy?: 'async' | 'defer'
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'gtag',
    compatibility: {
      nuxt: '^3',
    },
  },
  defaults: {
    id: '',
    config: {},
    initialConsent: true,
    loadingStrategy: 'defer',
  },
  setup (options, nuxt) {
    // @ts-ignore
    const resolver = createResolver(import.meta.url)

    // Add module options to public runtime config
    nuxt.options.runtimeConfig.public.gtag = defu(
      nuxt.options.runtimeConfig.public.gtag,
      options,
    )

    // Transpile runtime files
    nuxt.options.build.transpile.push(resolver.resolve('./runtime'))

    addImportsDir(resolver.resolve('./runtime/composables'))

    addPlugin({
      src: resolver.resolve('./runtime/plugin.client'),
      mode: 'client',
    })
  },
})
