
// 节流
export const throttle = (fn: () => void, delay: number | undefined)=> {
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
};

export const debounce = (fn: () => void, delay: number | undefined) => {
    let timeout: any = null
    return () => {
        clearTimeout(timeout)
        timeout = setTimeout(function(){
            fn()
        }, delay);
    }
}