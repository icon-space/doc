import { onBeforeMount, ref, watch } from 'vue'
import allIconItems, { total, IconItem, allCategoryItems, allCategoryCounts } from '../../category_list'
import { debounce } from '../../util'
import useIconStore from '../../stores/icon'

export interface IconGroup {
    // key: IconKey | IconItem[]
    key: string

    header: boolean
    val: IconItem | IconItem[]
}

const boothModeColumn: Record<string, number> = {
    list: 4,
    card: 12
}

const useIcons = () => {
    const icon = useIconStore()

    const target = ref<any>()
    // 列表
    const list = ref<IconGroup[]>([])
    // 展示模式
    const mode = ref<BoothMode>('list')
    const icons = ref<IconItem[]>(allIconItems)
    // 搜索关键字
    const keyword = ref<string>('')
    // 每个分类的数量
    const categoryCount = ref<Record<string, number>>(allCategoryCounts)
    // 搜索到的总数
    const searchTotal = ref<number>(total)
    // 是否只看选中的
    const selectedOnly = ref<boolean>(false)

    const include = (word: string, keywords: string[]): boolean => {
        for (let keyword of keywords) {
            if (word.indexOf(keyword) > -1) {
                return true
            }
        }
        return selectedOnly.value && keywords.length === 0;

    }

    const handlerSearch = debounce(() => {
        const searchCategoryCount: Record<string, number> = {}
        const searchIcons: IconItem[] = []
        const categorySet = new Set<string>()
        const categoryGroupSet = new Set<string>()
        let count = 0
        keyword.value = keyword.value.trim()
        let keywords = keyword.value.toLowerCase().split(/[\s]+/)

        if (selectedOnly.value) {
            keywords = keyword.value.length === 0 ? [] : keywords
        } else if (keyword.value === '') {
            icons.value = allIconItems
            searchTotal.value = total
            categoryCount.value = allCategoryCounts
            iconsGroup()
            return
        }

        for (let item of allIconItems) {
            if (categoryGroupSet.has(item.category)) {
                searchIcons.push(item)
                continue
            }
            if (item.kind === 'header' && !selectedOnly.value) {
                for (let k of item.keywords) {
                    if (include(k, keywords)) {
                        searchIcons.push(item)
                        categoryGroupSet.add(item.category)
                        categorySet.add(item.category)
                        searchCategoryCount[item.category] = item.count
                        count += item.count
                        break
                    }
                }
                continue
            }
            if (selectedOnly.value) {
                if (!(item.key in icon.icons)) {
                    continue
                }
            }
            if (item.kind === 'icon') {
                for (let k of item.keywords) {
                    if (include(k, keywords)) {
                        if (!categorySet.has(item.category)) {
                            searchIcons.push(allCategoryItems[item.category])
                            categorySet.add(item.category)
                            searchCategoryCount[item.category] = 0
                        }
                        searchIcons.push(item)
                        searchCategoryCount[item.category] += 1
                        count++
                        break
                    }
                }
            }
        }

        icons.value = searchIcons
        searchTotal.value = count
        categoryCount.value = searchCategoryCount

        iconsGroup()
    }, 3)

    // 分组
    const iconsGroup = () => {
        const size = boothModeColumn[mode.value]
        const items: IconGroup[] = []

        let index = 1
        let group: IconItem[] = []

        icons.value.forEach(value => {
            if (value.kind === 'header') {
                if (group.length) {
                    index = 1
                    items.push({
                        key: group[0].key,
                        header: false,
                        val: group
                    })
                    group = []
                }
                items.push({
                    key: value.key,
                    header: true,
                    val: value
                })
                return
            }
            if (index > size) {
                index = 1
                group = []
            }
            if (index <= size) {
                group.push(value)
            }
            if (index === size) {
                items.push({
                    key: value.key,
                    header: false,
                    val: group
                })
                group = []
            }
            index++
        })

        if (group.length) {
            items.push({
                key: group[0].key,
                header: false,
                val: group
            })
        }

        list.value = items
    }

    // 展示模式切换时
    const modeChange = () => {
        iconsGroup()
    }

    watch([selectedOnly], () => {
        handlerSearch()
    })

    // 搜素
    const search = () => {
        handlerSearch()
    }

    // 锚点被选择时
    const anchorSelect = (hash: string | undefined) => {
        if (!hash) {
            return
        }
        target.value.scrollIntoView({
            key: hash.substring(1),
            align: 'auto'
        })
    }

    onBeforeMount(() => {
        iconsGroup()
    })

    return {
        target,
        list,
        mode,
        categoryCount,
        keyword,
        searchTotal,
        selectedOnly,

        modeChange,
        search,
        anchorSelect
    }
}

export default useIcons