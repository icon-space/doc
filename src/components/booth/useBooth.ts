import { h } from 'vue'
import { Message } from '@arco-design/web-vue'
import useClipboard from 'vue-clipboard3'
import X2JS from 'x2js'
import useSiteStore from '../../stores/site'
import useOptionStore from '../../stores/option'
import { download, toCamelCase, toPascalCase, toSnakeCase } from '../../util'
import { renderToString } from '@vue/server-renderer'
import { IconSpace } from '@icon-space/vue-next/es/all'
import useIconStore from '../../stores/icon'
import JSZip from 'jszip'

const x2js = new X2JS()

const useBooth = (name: string = '', zhName: string = '') => {
    const { toClipboard } = useClipboard()
    const site = useSiteStore()
    const option = useOptionStore()
    const icon = useIconStore()

    const success = (text: string) => {
        Message.success(text)
    }

    const error = (text: string) => {
        Message.error(text)
    }

    const getName = (iconName: string, iconZhName: string): string => {
        let value = iconName
        switch (site.named) {
            case 'KebabCase':
                break
            case 'PascalCase':
                value = toPascalCase(iconName)
                break
            case 'CamelCase':
                value = toCamelCase(iconName)
                break
            case 'SnakeCase':
                value = toSnakeCase(iconName)
                break
            case 'Chinese':
                value = iconZhName
                break
        }
        return value
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

        const doc = x2js.xml2js<any>(html)
        doc.svg['_xmlns'] = 'http://www.w3.org/2000/svg'
        const svg = x2js.js2xml(doc).replaceAll('>', '>\n')
        return '<?xml version="1.0" encoding="UTF-8"?>\n' + svg
    }

    const copyName = async () => {
        let value = getName(name, zhName)

        await toClipboard(value)
        success(value)
    }

    const copySvg = async () => {
        const svg = await getSvg(name)
        await toClipboard(svg)
        success('ok')
    }

    const copyReactCode = async () => {
        let camelCaseName = toPascalCase(name)
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
        let value = getName(name, zhName)
        const svg = await getSvg(name)
        const file = new File([svg], `${value}.svg`, {
            type: 'image/svg'
        })
        download(file)
    }

    // 批量下载
    const batchDownloadSvgs = async () => {
        if (Object.keys(icon.icons).length === 0) {
            return
        }
        const zip = new JSZip()
        for (const k in icon.icons) {
            const svg = await getSvg(k)
            zip.file(`${getName(k, icon.icons[k])}.svg`, svg)
        }
        const content = await zip.generateAsync({ type: 'blob' })
        const file = new File([content], `IconSpace-${new Date().toLocaleString().replaceAll(/[\s\/:]+/g, '')}.zip`, {
            type: 'application/zip'
        })
        download(file)
    }

    const actions: Record<string, () => void> = {
        copyName,
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
        action,
        batchDownloadSvgs
    }
}

export default useBooth
