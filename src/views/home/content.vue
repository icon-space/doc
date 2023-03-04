<template>
    <a-layout-content class="layout-content">
        <div class="search">
            <a-space size="large" align="center">
                <a-input-search :style="{ width: '320px' }" :placeholder="$t('searchIcon')" allow-clear />
                <a-checkbox value="1">{{ $t('selectedOnly') }}：0 / {{ total }}</a-checkbox>
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
                    <a-anchor-link :href="`#${k}`" v-for="(v, k) in Category" :key="k"> {{ site.lang === 'zh' ? v : k }}（{{ CategoryList[k].length }}） </a-anchor-link>
                </a-anchor>
            </a-layout-sider>
            <div class="icons">
                <a-collapse :bordered="false" :default-active-key="Object.keys(Category)">
                    <a-collapse-item v-for="(v, k) in CategoryList" :key="k">
                        <template #header>
                            <h3 :id="k">{{ site.lang === 'zh' ? Category[k] : k }}（{{ CategoryList[k].length }}）</h3>
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
import { IconSpace } from '@icon-space/vue-next/es/all'
import { DEFAULT_ICON_CONFIGS } from '@icon-space/vue-next'
import Category from '../../category'
import CategoryList, { total } from '../../category_list'
import useSiteStore from '../../stores/site'
import Card from '../../components/Card.vue'
import { ref } from 'vue'

const site = useSiteStore()

// 展示模式
const mode = ref<string>('list')
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
