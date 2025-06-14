/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/drag-and-drop-calculator',
  plugins: [react()],
  test: {
       globals: true,
       environment: 'jsdom',
       setupFiles: ["./setupTests.js"]
     }
});
