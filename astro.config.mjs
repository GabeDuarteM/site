import { defineConfig, envField } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  env: {
    schema: {
      PUBLIC_POSTHOG_KEY: envField.string({ access: 'public', context: 'client', optional: true }),
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
