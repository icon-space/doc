import fs from 'fs'
import icons from '@icon-space/vue-next/icons.json'
import Category from '../src/category'

// 生成
function gen() {
    // 分类列表
    const categoryList: Record<string, any[]> = {}

    icons.forEach(val => {
        if (!(val.category in categoryList)) {
            categoryList[val.category] = []
        }
        categoryList[val.category].push(val)
    })

    const iconItems: any[] = []

    const allCategoryCounts: Record<string, number> = {}

    const categoryItems: Record<string, any> = {}

    Object.keys(Category).forEach(function (key) {
        const keywords = [key.toLowerCase(), ...Category[key].split(' & ')]
        const item = {
            kind: 'header',
            key: key,
            name: Category[key],
            category: key,
            keywords: keywords,
            count: categoryList[key].length
        }
        allCategoryCounts[key] = categoryList[key].length
        iconItems.push(item)
        categoryItems[key] = item
        categoryList[key].forEach(value => {
            iconItems.push({
                kind: 'icon',
                key: value.name,
                name: value.title,
                category: value.category,
                keywords: Array.from(new Set([...keywords, value.name, value.title, ...value.tag])),
                count: 0
            })
        })
    })

    const tmpl = `export const total = ${icons.length}

export interface IconItem {
    kind: 'header' | 'icon'
    key: string
    name: string
    category: string
    keywords: string[]
    count: number
}

export const allCategoryCounts: Record<string, number> = ${JSON.stringify(allCategoryCounts, null, '    ')}

export const allCategoryItems: Record<string, IconItem> = ${JSON.stringify(categoryItems, null, '    ')}

const allIconItems: IconItem[] = ${JSON.stringify(iconItems, null, '    ')}

export default allIconItems`

    const categoryListPath = './src/category_list.ts'
    fs.writeFileSync(categoryListPath, tmpl, 'utf8')
}

gen()
