import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';
//import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  site: process.env.NODE_ENV === 'production' ? 'https://movies-wp.vercel.app/' : undefined,
  integrations: [react()],
  ...(process.env.NODE_ENV === 'production' ? [vercel()] : []),
  //output: 'hybrid', // Dejara de existir en la version 5.0
  //output: 'static', // Para SSG por defecto
  output: 'server', // Para SSR
  adapter: vercel(),
});