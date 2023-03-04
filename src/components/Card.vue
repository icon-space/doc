<template>
    <div class="card">
        <div class="left" ref="target">
            <IconSpace v-if="targetIsVisible" :type="name"></IconSpace>
        </div>
        <div class="right" v-if="!card">
            <a-space direction="vertical" size="mini" v-if="site.lang === 'zh'" class="title">
                <span>{{ zhName }}</span>
                <span
                    ><small>{{ name }}</small></span
                >
            </a-space>
            <span v-else class="title">{{ name }}</span>
            <span class="more">
                <a-dropdown @select="action">
                    <a-button shape="circle" type="text" size="mini">
                        <template #icon>
                            <IconSpace type="more" v-bind="DEFAULT_ICON_CONFIGS" size="14" fill="currentColor"></IconSpace>
                        </template>
                    </a-button>
                    <template #content>
                        <a-doption value="copyName">{{ $t('copyName') }}</a-doption>
                        <a-doption value="copyCamelCase">{{ $t('copyCamelCase') }}</a-doption>
                        <a-doption value="copySvg">{{ $t('copySvg') }}</a-doption>
                        <a-doption value="copyReactCode">{{ $t('copyReactCode') }}</a-doption>
                        <a-doption value="copyVueCode">{{ $t('copyVueCode') }}</a-doption>
                        <a-doption value="downloadSvg">{{ $t('downloadSvg') }}</a-doption>
                    </template>
                </a-dropdown>
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import useClipboard from 'vue-clipboard3'
import useSiteStore from '../stores/site'
import useOptionStore from '../stores/option'
import { Message } from '@arco-design/web-vue'
import { IconSpace } from '@icon-space/vue-next/es/all'
import { DEFAULT_ICON_CONFIGS } from '@icon-space/vue-next'
import { download } from '../util'

const props = defineProps({
    // icon name
    name: {
        type: String,
        default: ''
    },
    // icon zh name
    zhName: {
        type: String,
        default: ''
    },
    card: {
        type: Boolean,
        default: false
    }
})

const { toClipboard } = useClipboard()
const site = useSiteStore()
const option = useOptionStore()

//此target要和被监视的目标模块想关联
const target = ref<HTMLElement>()
const targetIsVisible = ref(false)

const { stop } = useIntersectionObserver(target, ([{ isIntersecting }]) => {
    if (isIntersecting) {
        targetIsVisible.value = true
        stop()
    }
})

const success = (text: string) => {
    Message.success(text)
}

const error = (text: string) => {
    Message.error(text)
}

const toCamelCase = (): string => {
    return props.name
        .split('-')
        .map(item => item[0] && item[0].toUpperCase() + item.substring(1))
        .join('')
}

const copyName = async () => {
    await toClipboard(props.name)
    success('复制成功')
}
const copyCamelCase = async () => {
    const name = toCamelCase()
    await toClipboard(name)
    success('复制成功')
}
const copySvg = async () => {
    const svg = target.value?.firstElementChild?.innerHTML
    if (svg) {
        await toClipboard('<?xml version="1.0" encoding="UTF-8"?>\n' + svg)
        success('复制成功')
        return
    }
    error('复制失败')
}
const copyReactCode = async () => {
    const name = toCamelCase()
    let fill = ''
    if (option.theme === 'outline') {
        fill = `fill="${option.colors.outline.fill}"`
    } else if (option.theme === 'filled') {
        fill = `fill="${option.colors.filled.fill}"`
    } else if (option.theme === 'two-tone') {
        fill = `fill={['${option.colors.twoTone.fill}', '${option.colors.twoTone.twoTone}']}`
    } else if (option.theme === 'multi-color') {
        fill = `fill={['${option.colors.multiColor.outStrokeColor}', '${option.colors.multiColor.outFillColor}', '${option.colors.multiColor.innerStrokeColor}', '${option.colors.multiColor.innerFillColor}']}`
    }
    const svg = `<${name} theme="${option.theme}" size="${option.size}" ${fill}/>`
    await toClipboard(svg)
    success(svg)
}
const copyVueCode = async () => {
    let fill = ''
    if (option.theme === 'outline') {
        fill = `:fill="${option.colors.outline.fill}"`
    } else if (option.theme === 'filled') {
        fill = `:fill="${option.colors.filled.fill}"`
    } else if (option.theme === 'two-tone') {
        fill = `:fill="['${option.colors.twoTone.fill}', '${option.colors.twoTone.twoTone}']"`
    } else if (option.theme === 'multi-color') {
        fill = `:fill="['${option.colors.multiColor.outStrokeColor}', '${option.colors.multiColor.outFillColor}', '${option.colors.multiColor.innerStrokeColor}', '${option.colors.multiColor.innerFillColor}']"`
    }
    const svg = `<${props.name} theme="${option.theme}" size="${option.size}" ${fill}/>`
    await toClipboard(svg)
    success(svg)
}
const downloadSvg = async () => {
    const svg = target.value?.firstElementChild?.innerHTML
    if (!svg) {
        return
    }
    const file = new File(['<?xml version="1.0" encoding="UTF-8"?>\n' + svg], `${props.name}.svg`, {
        type: 'image/svg'
    })
    download(file)
}

const actions: Record<string, () => void> = {
    copyName,
    copyCamelCase,
    copySvg,
    copyReactCode,
    copyVueCode,
    downloadSvg
}

// 操作
const action = (val: any) => {
    val = val as string
    if (val in actions) {
        actions[val]()
    }
}
</script>

<style lang="scss">
.arco-dropdown-list-wrapper {
    max-height: 250px !important;
}
.card {
    display: flex;
    height: 64px;
    box-sizing: border-box;

    border: 1px solid var(--color-border);
    cursor: pointer;
    transition: all 0.2s linear;

    &:hover {
        box-shadow: 0 4px 16px rgb(0 0 0 / 10%);
    }

    .left {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 64px;
        height: 64px;
    }

    .right {
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 14px;
        width: 151px;
        .title {
            width: 121px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .more {
            width: 30px;
        }
    }
}
</style>
