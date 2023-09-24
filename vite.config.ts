import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({command}) => {
  const config = {
    plugins: [react()],
    base: '/',
    server: {
      open: true,
    }
  }

  if(command !== 'serve'){
    config.base = '/My-Portfolio/';
  }

  return config;
})
