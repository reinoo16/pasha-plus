// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        menu: resolve(__dirname, 'menu.html'),
        gallery: resolve(__dirname, 'gallery.html'),
        contact: resolve(__dirname, 'contact.html'),
        success: resolve(__dirname, 'form-success.html'),
      },
    },
  },
})