import { h } from 'vue'
import { Message } from '@arco-design/web-vue'
import useClipboard from 'vue-clipboard3'
import useOptionStore from '../../stores/option'
import { download, toCamelCase } from '../../util'
import { renderToString } from '@vue/server-renderer'
import { IconSpace } from '@icon-space/vue-next/es/all'

const useBooth = (name: string) => {
    const { toClipboard } = useClipboard()
    const option = useOptionStore()

    const success = (text: string) => {
        Message.success(text)
    }

    const error = (text: string) => {
        Message.error(text)
    }

    const getSvg = async (iconName: string): Promise<string> => {
        let html = await renderToString(
            h(IconSpace, {
                type: iconName,
                size: option.size,
                strokeWidth: option.strokeWidth,
                strokeLinecap: option.strokeLinecap,
                strokeLinejoin: option.strokeLinejoin,
                theme: option.theme,
                fill: option.getFill
            }),
            {}
        )
        html = html.substring(html.indexOf('<svg'), html.lastIndexOf('</svg>') + 6)
        return '<?xml version="1.0" encoding="UTF-8"?>\n' + html
    }

    const copyName = async () => {
        await toClipboard(name)
        success(name)
    }
    const copyCamelCase = async () => {
        const camelCaseName = toCamelCase(name)
        await toClipboard(camelCaseName)
        success(camelCaseName)
    }

    const copySvg = async () => {
        const svg = await getSvg(name)
        await toClipboard(svg)
        success('复制成功')
    }

    const copyReactCode = async () => {
        let camelCaseName = toCamelCase(name)
        let fill = option.getFill
        fill = typeof fill === 'string' ? fill : `{${JSON.stringify(fill).replaceAll('"', "'")}}`
        const reactCode = `<${camelCaseName} theme="${option.theme}" size="${option.size}" strokeWidth="{${option.strokeWidth}}" strokeLinecap="${option.strokeLinecap}" strokeLinejoin="${option.strokeLinejoin}" fill="${fill}"/>`
        await toClipboard(reactCode)
        success(reactCode)
    }

    const copyVueCode = async () => {
        let fill = option.getFill
        if (typeof fill === 'string') {
            fill = `fill="${fill}"`
        } else {
            fill = `:fill="${JSON.stringify(fill).replaceAll('"', "'")}"`
        }
        const vueCode = `<${name} theme="${option.theme}" :size="${option.size}" :strokeWidth="${option.strokeWidth}" strokeLinecap="${option.strokeLinecap}" strokeLinejoin="${option.strokeLinejoin}" ${fill}/>`
        await toClipboard(vueCode)
        success(vueCode)
    }

    const downloadSvg = async () => {
        const svg = await getSvg(name)
        const file = new File([svg], `${name}.svg`, {
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

    return {
        getSvg,
        actions,
        action
    }
}

export default useBooth
