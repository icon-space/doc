// 节流
export const throttle = (fn: () => void, delay: number | undefined) => {
    let isThrottle = true
    return () => {
        if (!isThrottle) {
            return
        }
        isThrottle = false
        const t = setTimeout(() => {
            fn()
            isThrottle = true
            clearTimeout(t)
        }, delay)
    }
}

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
export const download = (downfile: Blob) => {
    const tmpLink = document.createElement('a')
    const objectUrl = URL.createObjectURL(downfile)

    tmpLink.href = objectUrl
    tmpLink.download = downfile.name
    document.body.appendChild(tmpLink)
    tmpLink.click()

    document.body.removeChild(tmpLink)
    URL.revokeObjectURL(objectUrl)
}

export const getSvgDom = (name: string): string | undefined => {
    return document.querySelector(`#i-${name}`)?.firstElementChild?.innerHTML
}


// 转大驼峰
export const toCamelCase = (name:string): string => {
    return name
        .split('-')
        .map(item => item[0] && item[0].toUpperCase() + item.substring(1))
        .join('')
}