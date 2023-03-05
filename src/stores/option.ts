import { defineStore } from 'pinia'
import { IIconConfig } from '@icon-space/vue-next/es/runtime'

type Iconfig = IIconConfig & {
    size: number
}

const def: Iconfig = {
    size: 24,
    strokeWidth: 4,
    theme: 'outline',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    colors: {
        outline: {
            fill: '#333',
            background: 'transparent'
        },
        filled: {
            fill: '#333',
            background: '#FFF'
        },
        twoTone: {
            fill: '#333',
            twoTone: '#2F88FF'
        },
        multiColor: {
            outStrokeColor: '#333',
            outFillColor: '#2F88FF',
            innerStrokeColor: '#FFF',
            innerFillColor: '#43CCF8'
        }
    },
    rtl: false,
    prefix: 'i'
}

// 图标设置
const useOptionStore = defineStore({
    id: 'option',
    state: (): Iconfig => ({
        size: def.size,
        strokeWidth: def.strokeWidth,
        theme: def.theme,
        strokeLinecap: def.strokeLinecap,
        strokeLinejoin: def.strokeLinejoin,
        colors: {
            outline: {
                fill: def.colors.outline.fill,
                background: def.colors.outline.background
            },
            filled: {
                fill: def.colors.filled.fill,
                background: def.colors.filled.background
            },
            twoTone: {
                fill: def.colors.twoTone.fill,
                twoTone: def.colors.twoTone.twoTone
            },
            multiColor: {
                outStrokeColor: def.colors.multiColor.outStrokeColor,
                outFillColor: def.colors.multiColor.outFillColor,
                innerStrokeColor: def.colors.multiColor.innerStrokeColor,
                innerFillColor: def.colors.multiColor.innerFillColor
            }
        },
        rtl: def.rtl,
        prefix: def.prefix
    }),
    getters: {
    },
    actions: {
        reset() {
            this.size = def.size
            this.strokeWidth = def.strokeWidth
            this.theme = def.theme
            this.strokeLinecap = def.strokeLinecap
            this.strokeLinejoin = def.strokeLinejoin

            this.colors.outline.fill = def.colors.outline.fill
            this.colors.outline.background = def.colors.outline.background
            this.colors.filled.fill = def.colors.filled.fill
            this.colors.filled.background = def.colors.filled.background
            this.colors.twoTone.fill = def.colors.twoTone.fill
            this.colors.twoTone.twoTone = def.colors.twoTone.twoTone

            this.colors.multiColor.outStrokeColor = def.colors.multiColor.outStrokeColor
            this.colors.multiColor.outFillColor = def.colors.multiColor.outFillColor
            this.colors.multiColor.innerStrokeColor = def.colors.multiColor.innerStrokeColor
            this.colors.multiColor.innerFillColor = def.colors.multiColor.innerFillColor
        }
    },
    // 启用持久化
    persist: true
})

export default useOptionStore
