import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ArcoResolver } from 'unplugin-vue-components/resolvers'
import { chunkSplitPlugin } from 'vite-plugin-chunk-split'

// https://vitejs.dev/config/

export default defineConfig(({ mode }) => {
    const base = mode === 'github' ? '/doc/' : '/'
    return {
        base: base,
        plugins: [
            vue(),
            AutoImport({
                resolvers: [ArcoResolver()]
            }),
            Components({
                resolvers: [
                    ArcoResolver({
                        sideEffect: true
                    })
                ]
            }),
            chunkSplitPlugin({
                strategy: 'default',
                customSplitting: {
                    __commonjsHelpers__: [/some unreachable check/]
                }
            })
        ],
        build: {
            target: 'es2015',
            cssTarget: 'chrome61'
        }
    }
})
