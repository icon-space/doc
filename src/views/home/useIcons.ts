import { ref, watch} from "vue";
import { useScroll } from '@vueuse/core'
import allIconItems, { total, IconItem, allCategoryItems, allCategoryCounts } from '../../category_list'
import { debounce } from "../../util";

const size = 41

const useIcons = () => {
    // 展示开始的位置
    const showStart = ref<number>(0)
    // 展示结束的位置
    const showEnd = ref<number>(size)
    const list = ref<IconItem[]>(allIconItems.slice(0, size))
    const icons = ref<IconItem[]>(allIconItems)
    // 搜索关键字
    const keyword = ref<string>('')
    // 每个分类的数量
    const categoryCount = ref<Record<string, number>>(allCategoryCounts)
    // 搜索到的总数
    const searchTotal = ref<number>(total)

    const handlerSearch = debounce(() => {
        const searchCategoryCount:Record<string, number> = {}
        const searchIcons: IconItem[] = []
        const categorySet = new Set<string>()
        const categoryGroupSet = new Set<string>()
        let count = 0
        for (let item of allIconItems) {
            if (categoryGroupSet.has(item.category)) {
                searchIcons.push(item)
                continue
            }
            if (item.kind === 'header') {
                for (let k of item.keywords) {
                    if (k.indexOf(keyword.value) !== -1) {
                        searchIcons.push(item)
                        categoryGroupSet.add(item.category)
                        categorySet.add(item.category)
                        searchCategoryCount[item.category] = item.count
                        break
                    }
                }
                continue
            }
            if (item.kind === 'icon') {
                for (let k of item.keywords) {
                    if (k.indexOf(keyword.value) !== -1) {
                        if (!categorySet.has(item.category)) {
                            searchIcons.push(allCategoryItems[item.category])
                            categorySet.add(item.category)
                            searchCategoryCount[item.category] = 0
                        }
                        searchIcons.push(item)
                        searchCategoryCount[item.category] += 1
                        count ++
                        break
                    }
                }
            }
        }
        icons.value = searchIcons
        showStart.value = 0
        showEnd.value = size
        searchTotal.value = count
        categoryCount.value = searchCategoryCount
    }, 10)

    // 搜素
    const search = () => {
        if (keyword.value.trim().length === 0) {
            icons.value = allIconItems
            showStart.value = 0
            showEnd.value = size
            searchTotal.value = total
            categoryCount.value = allCategoryCounts
            return
        }
        handlerSearch()
    }

    const scroll = ref<HTMLElement>()

    const { arrivedState, isScrolling, y } = useScroll(scroll)


    watch(arrivedState, (value, oldValue, onCleanup) => {
        if (!value.top && !value.bottom) {
            return
        }
        if (value.top && showStart.value > 0) {
            let start = showStart.value
            start -= size
            if (start < 0) {
                start = 0
            }
            showStart.value = start
        }
        if (value.bottom && showEnd.value < icons.value.length) {
            let end = showEnd.value
            end += size
            if (end > icons.value.length) {
                end = icons.value.length
            }
            showEnd.value = end
        }
    })



    // 锚点被选择时
    const anchorSelect = (hash: string | undefined, preHash: string) => {
        if (!hash) {
            return
        }
        const key = hash?.substring(1)
        for (let index in icons.value) {
            const item = icons.value[index]
            if (item.kind === 'icon') {
                continue
            }
            if (item.key === key) {
                showStart.value = Number(index)
                showEnd.value = showStart.value + size
                break
            }
        }
    }


    return {
        list,
        scroll,
        icons,
        categoryCount,
        showStart,
        showEnd,
        keyword,
        searchTotal,
        search,
        anchorSelect,
        arrivedState, isScrolling, y
    }
}

export default useIcons