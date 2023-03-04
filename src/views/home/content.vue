<template>
    <a-layout-content class="layout-content">
        <div class="search">
            <a-space size="large" align="center">
                <a-input-search :style="{ width: '320px' }" :placeholder="$t('searchIcon')" allow-clear v-model="keyword" @input="search" />
                <a-checkbox value="1">{{ $t('selectedOnly') }}：{{ selectedTotal }} / {{ searchTotal }}</a-checkbox>
                <a-radio-group type="button" v-model="mode">
                    <a-radio value="list">
                        <IconSpace type="view-grid-list" v-bind="DEFAULT_ICON_CONFIGS" :size="20" fill="currentColor"></IconSpace>
                    </a-radio>
                    <a-radio value="card">
                        <IconSpace type="view-grid-card" v-bind="DEFAULT_ICON_CONFIGS" :size="20" fill="currentColor"></IconSpace>
                    </a-radio>
                </a-radio-group>
            </a-space>
        </div>
        <div class="layout-icons">
            <a-layout-sider class="layout-side-left">
                <a-anchor line-less style="width: 100%" :change-hash="true" scroll-container=".icons">
                    <a-anchor-link :href="`#${k}`" v-for="(v, k) in searchCategory" :key="k"> {{ site.lang === 'zh' ? v : k }}（{{ searchIcons[k].length }}） </a-anchor-link>
                </a-anchor>
            </a-layout-sider>
            <div class="icons">
                <a-collapse :bordered="false" :default-active-key="expandKeys">
                    <a-collapse-item v-for="(v, k) in searchIcons" :key="k">
                        <template #header>
                            <h3 :id="k">{{ site.lang === 'zh' ? Category[k] : k }}（{{ searchIcons[k].length }}）</h3>
                        </template>
                        <a-space wrap>
                            <Card v-for="val in v" :key="val.id" :name="val.name" :zh-name="val.title" :card="mode === 'card'"></Card>
                        </a-space>
                    </a-collapse-item>
                </a-collapse>
            </div>
        </div>

    </a-layout-content>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { IconSpace } from '@icon-space/vue-next/es/all'
import { DEFAULT_ICON_CONFIGS } from '@icon-space/vue-next'
import Category from '../../category'
import CategoryList, { total } from '../../category_list'
import useSiteStore from '../../stores/site'
import Card from '../../components/Card.vue'
import { throttle, debounce } from "../../util";

const site = useSiteStore()

// 展示模式
const mode = ref<string>('list')
// 展开key
const expandKeys = ref<string[]>(Object.keys(Category))
// 搜索的关键字
const keyword = ref<string>('')
// 当前搜索到的总数
const searchTotal = ref<number>(total)
// 当前选中的数量
const selectedTotal = ref<number>(0)
// 当前搜索到的目录分类
const searchCategory = ref<Record<string, string>>(Category)
// 当前搜索到的图标
const searchIcons = ref<Record<string, any[]>>(CategoryList)


// 处理搜索
const handlerSearch = debounce( async () => {
    console.time('handlerSearch');

    if (keyword.value.trim() === '') {
        searchCategory.value = Category
        searchIcons.value = CategoryList
        searchTotal.value = total
        expandKeys.value = Object.keys(Category)
        console.timeEnd('handlerSearch');
        return
    }

    const allCategory: Record<string, string> = {};
    const category: Record<string, string> = {};
    const icons: Record<string, any[]> = {};

    for (let categoryKey in Category) {
        const a = categoryKey.indexOf(keyword.value);
        const b = Category[categoryKey].indexOf(keyword.value);
        if ((a & b) === -1) {
            continue;
        }
        category[categoryKey] = Category[categoryKey];
        allCategory[categoryKey] = Category[categoryKey];
        icons[categoryKey] = CategoryList[categoryKey];
    }

    for (let categoryListKey in CategoryList) {
        if (categoryListKey in allCategory) {
            continue;
        }

        for (let value of CategoryList[categoryListKey]) {
            const a = value.title.indexOf(keyword.value);
            const b = value.name.indexOf(keyword.value);
            let c = -1;
            for (let tag of value.tag) {
                if (tag.indexOf(keyword.value) !== -1) {
                    c = 0;
                    break;
                }
            }

            if ((a & b & c) === -1) {
                continue;
            }

            category[categoryListKey] = Category[categoryListKey];
            if (!(categoryListKey in icons)) {
                icons[categoryListKey] = [];
            }
            icons[categoryListKey].push(value);
        }

    }

    let num = 0;
    for (let iconsKey in icons) {
        num += icons[iconsKey].length;
    }

    searchCategory.value = category;
    searchIcons.value = icons;
    searchTotal.value = num;
    expandKeys.value = Object.keys(category);
    console.timeEnd('handlerSearch');
}, 5)

// 搜索
const search = () => {
    console.log(keyword.value)
    handlerSearch()
}

</script>

<style lang="scss">

.layout-content {
    height: calc(100vh - 60px);
    width: 1170px;
    box-sizing: border-box;

    border-right: 1px solid var(--color-border);

    .search {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 60px;
        box-sizing: border-box;
        border-bottom: 1px solid var(--color-border);

        .arco-radio-button-content {
            display: flex;
            align-items: center;
        }
    }

    .layout-icons {
        height: calc(100vh - 120px);
        display: flex;
        flex-direction: row;

        .layout-side-left {
            height: 100%;
            overflow-y: auto;
            box-shadow: none;

            .arco-layout-sider-children {
                padding: 20px;
                box-sizing: border-box;
            }
        }

        .icons {
            height: 100%;
            overflow-y: auto;
            border-left: 1px solid var(--color-border);

            .arco-collapse-item {
                border: 0;

                .arco-collapse-item-header {
                    border: 0;
                }

                .arco-collapse-item-content {
                    background-color: var(--color-bg-2);
                }
            }
        }
    }

}
</style>
