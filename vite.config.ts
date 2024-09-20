import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import EnvironmentPlugin from 'vite-plugin-environment';
import * as path from 'path';

const apiKey = process.env.API_KEY;
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    EnvironmentPlugin({
      // Uses 'development' if the NODE_ENV environment variable is not defined.
      NODE_ENV: 'development',

      // Have in mind that variables coming from process.env are always strings.
      DEBUG: 'false',

      // Required: will fail if the API_KEY environment variable is not provided.
      API_KEY: '/',
      _TEST_: 'false',
      // Optional: will not fail if the APP_VERSION environment variable is missing.
      APP_VERSION: null,
      VITE_APP_TEST: 'false',
      VITE_APP_URL: 'http://localhost:8000',
    }),
  ],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
});
