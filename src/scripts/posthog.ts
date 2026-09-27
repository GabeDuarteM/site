import { PUBLIC_POSTHOG_KEY } from 'astro:env/client'
import { posthog } from 'posthog-js'
import 'posthog-js/dist/posthog-recorder'

if (PUBLIC_POSTHOG_KEY !== undefined && PUBLIC_POSTHOG_KEY !== '') {
  posthog.init(PUBLIC_POSTHOG_KEY, {
    api_host: 'https://espeon.gdm.dev',
    defaults: '2026-08-30',
    opt_out_useragent_filter: true,
    ui_host: 'https://eu.posthog.com',
  })
}
