import {defineConfig} from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
// https://vitejs.dev/config/

const path = require('path')
export default defineConfig({
    plugins: [
        uni(),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"), // 设置@指向src
            "@components": path.resolve(__dirname, "src/components"), // 设置@components指向src/components
        },
    },
})
