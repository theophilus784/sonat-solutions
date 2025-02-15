import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/img': {
        target: 'https://teywebapi.azurewebsites.net', // Your Express backend server
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/img/, '/img'), // Ensures the path matches backend's route
      },
      '/image': {
        target: 'https://teywebapi.azurewebsites.net', // Your Express backend server 
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/image/, '/image'), // Ensures the path matches backend's route
      },
    },
  },
})
