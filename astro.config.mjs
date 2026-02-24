import { defineConfig } from 'astro/config';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  site: 'https://dune-spice-wars.github.io',
  base: isProd ? '/duneopedia/' : '/',
  output: 'static',
  build: {
    format: 'file',
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
});
