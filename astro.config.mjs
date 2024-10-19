import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  site: 'https://movies-wp-astro.vercel.app',
  integrations: [react()],
  //output: 'hybrid', // Dejara de existir en la version 5.0
  // output: 'static', // Para SSG por defecto
  output: 'server', // Para SSR
  adapter: vercel(),
});