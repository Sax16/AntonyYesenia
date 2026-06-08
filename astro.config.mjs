// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://boda-antony-yesenia.local',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
