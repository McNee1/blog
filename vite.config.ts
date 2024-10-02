import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import * as path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },

  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['legacy-js-api'],
      },
    },
  },
  define: {
    __API_URL__: JSON.stringify('http://localhost:8000'),
  },
});
