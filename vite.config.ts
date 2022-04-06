import { defineConfig, splitVendorChunkPlugin } from 'vite'
import { visualizer } from 'rollup-plugin-visualizer'
import react from '@vitejs/plugin-react'

export default ({ mode }) => {
  return defineConfig({
    plugins: [
      react(),
      visualizer(),
      splitVendorChunkPlugin(),
    ],
    build: {
      minify: mode === 'prod',
    },
  });
}
