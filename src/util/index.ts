export const debounce = (fn: () => void, delay: number | undefined) => {
    let timeout: any = null
    return () => {
        clearTimeout(timeout)
        timeout = setTimeout(function () {
            fn()
        }, delay)
    }
}

// 下载文件
export const download = (downfile: Blob, name: string) => {
    const tmpLink = document.createElement('a')
    const objectUrl = URL.createObjectURL(downfile)

    tmpLink.href = objectUrl
    tmpLink.download = name
    document.body.appendChild(tmpLink)
    tmpLink.click()

    document.body.removeChild(tmpLink)
    URL.revokeObjectURL(objectUrl)
}

export const getSvgDom = (name: string): string | undefined => {
    return document.querySelector(`#i-${name}`)?.firstElementChild?.innerHTML
}

// 帕斯卡命名法
export const toPascalCase = (name: string): string => {
    return name
        .split('-')
        .map(item => item[0] && item[0].toUpperCase() + item.substring(1))
        .join('')
}

// 小驼峰命名
export const toCamelCase = (name: string): string => {
    return name
        .split('-')
        .map((item, index) => {
            if (index === 0) {
                return item[0] && item[0].toLowerCase() + item.substring(1)
            }
            return item[0] && item[0].toUpperCase() + item.substring(1)
        })
        .join('')
}

// 下划线命名法
export const toSnakeCase = (name: string): string => {
    return name.replaceAll('-', '_')
}

// 中划线命名法
export const toKebabCase = (name: string): string => {
    return name
}
