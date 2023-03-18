<template>
    <a-layout class="layout">
        <a-layout-header class="layout-header">
            <a-row align="center" class="header">
                <a-col :span="12" class="left"> IconSpace </a-col>
                <a-col :span="12" class="right">
                    <a-space size="medium">
                        <a-dropdown @select="setLanguage">
                            <a-button shape="circle">
                                <template #icon>
                                    <Translate size="20"></Translate>
                                </template>
                            </a-button>
                            <template #content>
                                <a-doption value="zh">中文</a-doption>
                                <a-doption value="en">English</a-doption>
                            </template>
                        </a-dropdown>

                        <a-button shape="circle" @click="setTheme">
                            <template #icon>
                                <SunOne size="20" v-if="site.theme === 'dark'"></SunOne>
                                <Moon size="20" v-else></Moon>
                            </template>
                        </a-button>
                        <a-button shape="circle" @click="github">
                            <template #icon>
                                <GithubOne size="20"></GithubOne>
                            </template>
                        </a-button>
                        <a-button shape="circle" @click="bug">
                            <template #icon>
                                <Bug size="20"></Bug>
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
import { Translate, SunOne, Moon, GithubOne, Bug } from '@icon-space/vue-next'
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

const bug = () => {
    window.open('https://github.com/icon-space/doc/issues', '_blank')
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
