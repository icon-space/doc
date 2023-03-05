<template>
    <a-layout-content class="layout-content">
        <div class="search">
            <a-space size="large" align="center">
                <a-input-search :style="{ width: '320px' }" :placeholder="$t('searchIcon')" allow-clear @input="search" @press-enter="search" @clear="search" v-model="keyword" />
<!--                <a-checkbox value="1">{{ $t('selectedOnly') }}：{{ 0 }} / {{ searchTotal }}</a-checkbox>-->
                <a-radio-group type="button" v-model="mode" @change="modeChange">
                    <a-radio value="list">
                        <ViewGridList :size="22" :strokeWidth="2" theme="outline" strokeLinecap="round" strokeLinejoin="round" fill="currentColor"></ViewGridList>
                    </a-radio>
                    <a-radio value="card">
                        <ViewGridCard :size="22" :strokeWidth="2" theme="outline" strokeLinecap="round" strokeLinejoin="round" fill="currentColor"></ViewGridCard>
                    </a-radio>
                </a-radio-group>
            </a-space>
        </div>
        <div class="layout-icons">
            <a-layout-sider class="layout-side-left" ref="anchor">
                <a-anchor line-less style="width: 100%" :change-hash="false" scroll-container=".arco-list-content"  @select="anchorSelect">
                    <a-anchor-link :id="`${k}-anchor`" :href="`#${k}`" v-for="(v, k) in categoryCount" :key="k"> {{ site.lang === 'zh' ? Category[k] : k }}（{{ v }}） </a-anchor-link>
                </a-anchor>
            </a-layout-sider>
            <div class="icons" ref="scroll">
                <a-list
                    ref="target"
                    :data="list"
                    :bordered="false"
                    :virtual-list-props="{
                      height: 'calc(100vh - 140px)',
                    }"
                >
                    <template #item="{ item, index }">
                        <a-list-item :key="item.key">
                            <a-space fill style="margin-bottom: 8px">
                                <template v-if="item.header">
                                    <h2 :id="item.key">{{ site.lang === 'zh' ? item.val.name : item.val.key }}（{{categoryCount[item.val.key]}}）</h2>
                                </template>
                                <template v-else v-for="val in item.val" :key="val.key">
                                    <Card :name="val.key" :zh-name="val.name" :card="mode === 'card'"></Card>
                                </template>
                            </a-space>
                        </a-list-item>
                    </template>
                </a-list>
            </div>
        </div>
    </a-layout-content>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import {ViewGridList, ViewGridCard, IconProvider} from "@icon-space/vue-next";
import Card from "../../components/Card.vue";
import Category from '../../category'
import useSiteStore from '../../stores/site'
import useIcons from "./useIcons";
import useOptionStore from "../../stores/option";

const site = useSiteStore()
const option = useOptionStore()

// 设置图标属性
IconProvider(option.$state)

const anchor = ref<HTMLElement>()


const {
    target,
    list,
    mode,
    categoryCount,
    keyword,
    searchTotal,

    modeChange,
    search,
    anchorSelect
} = useIcons()

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
            width: 100%;
            border-left: 1px solid var(--color-border);
            box-sizing: border-box;

            .arco-list-content {
                padding: 0 30px;

                .arco-list-item {
                    border: 0 !important;
                    padding: 0 !important;
                }
            }
        }
    }
}
</style>
