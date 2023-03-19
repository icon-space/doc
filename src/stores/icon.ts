import { defineStore } from 'pinia'

export interface SelectedIcon {
    icons: Record<string, string>
}

// 选择后的图标
const useIconStore = defineStore({
    id: 'icon',
    state: (): SelectedIcon => ({
        icons: {}
    }),
    getters: {},
    actions: {
        add(name: string, zhName: string) {
            this.icons[name] = zhName
        },
        remove(name: string) {
            delete this.icons[name]
        }
    },
    // 启用持久化
    persist: false
})

export default useIconStore
