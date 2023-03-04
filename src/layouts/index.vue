<template>
    <a-layout class="layout">
        <a-layout-header class="layout-header">
            <a-row align="center" class="header">
                <a-col :span="12" class="left"> IconSpace(未完善) </a-col>
                <a-col :span="12" class="right">
                    <a-space size="medium">
                        <a-dropdown @select="setLanguage">
                            <a-button shape="circle">
                                <template #icon>
                                    <IconSpace type="translate" size="20"></IconSpace>
                                </template>
                            </a-button>
                            <template #content>
                                <a-doption value="zh">中文</a-doption>
                                <a-doption value="en">English</a-doption>
                            </template>
                        </a-dropdown>

                        <a-button shape="circle" @click="setTheme">
                            <template #icon>
                                <IconSpace type="sun-one" size="20" v-if="site.theme === 'dark'"></IconSpace>
                                <IconSpace type="moon" size="20" v-else></IconSpace>
                            </template>
                        </a-button>
                        <a-button shape="circle" @click="github">
                            <template #icon>
                                <IconSpace type="github" size="20"></IconSpace>
                            </template>
                        </a-button>
                    </a-space>
                </a-col>
            </a-row>
        </a-layout-header>
        <a-layout class="layout-main">
            <router-view></router-view>
        </a-layout>
    </a-layout>
</template>

<script setup lang="ts">
import { IconSpace } from '@icon-space/vue-next/es/all'
import useSiteStore, { LangType } from '../stores/site'

const site = useSiteStore()

const setLanguage = (val: any) => {
    val = val as LangType
    site.setLang(val)
}

const setTheme = () => {
    if (site.theme === 'light') {
        site.setTheme('dark')
        return
    }
    site.setTheme('light')
}

const github = () => {
    window.open('https://github.com/icon-space/IconSpace', '_blank')
}
</script>

<style scoped lang="scss">
.layout {
    height: 100%;
    color: var(--color-text-1);

    .layout-header {
        height: 60px;
        background-color: var(--color-bg-2);
        border-bottom: 1px solid var(--color-border);
        padding: 0 20px;

        .header {
            height: 100%;

            .left {
                display: flex;
                align-items: center;
                height: 100%;
                font-size: 1.6rem;
                font-weight: bold;
            }

            .right {
                display: flex;
                align-items: center;
                height: 100%;
                justify-content: flex-end;
            }
        }
    }

    .layout-main {
        height: calc(100% - 60px);
        background-color: var(--color-bg-2);
    }
}
</style>
