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

    const categoryListOrdered: Record<string, any[]> = {}

    Object.keys(Category).forEach(function (key) {
        categoryListOrdered[key] = categoryList[key]
    })

    const categoryListPath = './src/category_list.ts'

    const categoryListContent = `export const total = ${icons.length}\n\nexport default ${JSON.stringify(categoryListOrdered, null, '    ')} as Record<string, any[]>`

    fs.writeFileSync(categoryListPath, categoryListContent, 'utf8')
}

gen()
