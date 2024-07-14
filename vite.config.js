import {defineConfig} from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';
// https://vitejs.dev/config/

const path = require('path')
export default defineConfig({
    plugins: [
        uni(),
        AutoImport({
            resolvers: [VantResolver()],
        }),
        Components({
            resolvers: [VantResolver()],
        }),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"), // 设置@指向src
            "@components": path.resolve(__dirname, "src/components"), // 设置@components指向src/components
        },
    },
})
