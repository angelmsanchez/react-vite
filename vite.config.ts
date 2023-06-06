import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { checker } from 'vite-plugin-checker';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
    }),
    {
      ...eslint({
        lintOnStart: true,
      }),
      apply: 'build',
    },
    {
      ...eslint({
        failOnWarning: false,
        failOnError: false,
        lintOnStart: true,
        cache: false,
      }),
      apply: 'serve',
      enforce: 'post',
    },
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.js',
  },
});
