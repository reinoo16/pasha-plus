const { defineConfig } = require('vite')

module.exports = defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: './index.html',
                about: './about.html',
                menu: './menu.html',
                gallery: './gallery.html',
                contact: './contact.html',
                formSuccess: './form-success.html',
            }
        }
    }
})