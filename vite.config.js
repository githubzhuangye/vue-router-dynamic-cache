import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
const { resolve } = require('path');
import pluginVueSetupExtend from 'vite-plugin-vue-setup-extend';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '~': resolve(__dirname, './'),
            '@': resolve(__dirname, 'src'),
            '@common': resolve(__dirname, 'src/common'),
            '@components': resolve(__dirname, 'src/components'),
            '@theme': resolve(__dirname, 'src/theme'),
            '@api': resolve(__dirname, 'src/api'),
            '@assets': resolve(__dirname, 'src/assets'),
            '@libs': resolve(__dirname, 'src/libs'),
        },
        extensions: ['.js', '.json', '.vue']
    },
    plugins: [
        vue(),
        pluginVueSetupExtend()
    ]
})
