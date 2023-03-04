import { defineStore } from 'pinia'
import i18n from '../i18n'

export type ThemeType = 'dark' | 'light'
export type LangType = 'zh' | 'en'

export interface SiteOption {
    // 主题
    theme: ThemeType
    // 语言
    lang: LangType
}

// 网页设置
const useSiteStore = defineStore({
    id: 'site',
    state: (): SiteOption => ({
        theme: 'light',
        lang: 'en',
    }),
    getters: {
    },
    actions: {
        init() {
            this.setTheme(this.theme)
            this.setLang(this.lang)
        },
        setTheme(theme: ThemeType) {
            this.theme = theme
            document.body.setAttribute('arco-theme', theme)
        },
        setLang(lang: LangType) {
            this.lang = lang
            document.documentElement.setAttribute('lang', lang)
            i18n.global.locale = lang
        }
    },
    // 启用持久化
    persist: true
})

export default useSiteStore
