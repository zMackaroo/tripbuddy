import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@Utils': path.resolve(__dirname, './src/Utils'),
      '@Images': path.resolve(__dirname, './src/Assets/Images'),
      "@Components": path.resolve(__dirname, './src/Components'),
      '@Assets': path.resolve(__dirname, './src/Assets')
    },
  },
});
