<template>
    <a-layout-content class="layout-content">
        <div class="search">
            <a-space size="large" align="center">
                <a-input-search :style="{ width: '320px' }" :placeholder="$t('searchIcon')" allow-clear @input="search" v-model="keyword" />
                <a-checkbox value="1">{{ $t('selectedOnly') }}：{{ 0 }} / {{ searchTotal }}</a-checkbox>
                <a-radio-group type="button" v-model="mode">
                    <a-radio value="list">
                        <ViewGridList v-bind="baseIcon"></ViewGridList>
                    </a-radio>
                    <a-radio value="card">
                        <ViewGridCard v-bind="baseIcon"></ViewGridCard>
                    </a-radio>
                </a-radio-group>
            </a-space>
        </div>
        <div class="layout-icons">
            <a-layout-sider class="layout-side-left" ref="anchor">
                <a-anchor line-less style="width: 100%" :change-hash="false" scroll-container=".icons" @change="handlerAnchorChange"  @select="anchorSelect">
                    <a-anchor-link :id="`${k}-anchor`" :href="`#${k}`" v-for="(v, k) in categoryCount" :key="k"> {{ site.lang === 'zh' ? Category[k] : k }}（{{ v }}） </a-anchor-link>
                </a-anchor>
            </a-layout-sider>
            <div class="icons" ref="scroll">
                <a-row :gutter="[16, 16]">
                    <template v-for="item in icons.slice(showStart, showEnd)" :key="item.key">
                        <template v-if="item.kind === 'header'">
                            <a-col :span="24">
                                <h2 :id="item.key">{{ site.lang === 'zh' ? item.name : item.key }}（{{categoryCount[item.key]}}）</h2>
                            </a-col>
                        </template>
                        <template v-if="item.kind === 'icon'" >
                            <a-col :span="mode === 'card' ? 2 : 6">
                                <Card :name="item.key" :zh-name="item.name" :card="mode === 'card'"></Card>
                            </a-col>
                        </template>
                    </template>
                </a-row>

            </div>
        </div>
    </a-layout-content>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {ViewGridList, ViewGridCard, IconProvider} from "@icon-space/vue-next";
import Card from "../../components/Card.vue";
import Category from '../../category'
import useSiteStore from '../../stores/site'
import useIcons from "./useIcons";
import useOptionStore from "../../stores/option";

const site = useSiteStore()
const option = useOptionStore()

const baseIcon = {
    size: 22,
    strokeWidth: 2,
    theme: 'outline',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    fill: 'currentColor'
}

// 设置图标属性
IconProvider(option.$state)

const anchor = ref<HTMLElement>()
const handlerAnchorChange = (hash: string) => {
    const id = hash + '-anchor'
    document.querySelector(id)?.scrollIntoView(false)
}

// 展示模式
const mode = ref<string>('list')

const {
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
            overflow-y: auto;
            border-left: 1px solid var(--color-border);
            padding: 0 30px
        }
    }
}
</style>
