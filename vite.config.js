import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { configDefaults } from 'vitest/config';
import { quasar } from '@quasar/vite-plugin';

export default defineConfig({
  // ...
  plugins: [vue(), quasar({
    // Quasar options here if needed
  })],
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: 'happy-dom',
    exclude: [...configDefaults.exclude, 'e2e/*'],
  }
})
