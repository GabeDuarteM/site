import { defineConfig, envField, fontProviders } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  env: {
    schema: {
      PUBLIC_POSTHOG_KEY: envField.string({ access: 'public', context: 'client', optional: true }),
    },
  },
  fonts: [
    {
      cssVariable: '--font-montserrat',
      name: 'Montserrat',
      provider: fontProviders.google(),
      styles: ['normal'],
      weights: ['300', '400', '500'],
    },
    {
      cssVariable: '--font-roboto',
      name: 'Roboto',
      provider: fontProviders.google(),
      styles: ['normal'],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
})
