import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ArcoResolver } from 'unplugin-vue-components/resolvers'
import { chunkSplitPlugin } from 'vite-plugin-chunk-split'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/

export default defineConfig(({ mode }) => {
    const base = mode === 'github' ? '/' : '/'
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
            }),
            visualizer({
                gzipSize: true,
                brotliSize: true,
                emitFile: false,
                filename: 'visualizer.html',
                open: mode !== 'github'
            })
        ],
        build: {
            target: 'es2015',
            cssTarget: 'chrome61'
        }
    }
})
