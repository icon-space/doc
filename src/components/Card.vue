<template>
    <div class="card">
        <div class="left">
            <IconSpace :type="name"></IconSpace>
        </div>
        <div class="right" v-if="!card">
            <a-space direction="vertical" size="mini" v-if="site.lang === 'zh'" class="title">
                <span>{{ zhName }}</span>
                <span><small>{{ name }}</small></span>
            </a-space>
            <span v-else class="title">{{ name }}</span>
            <span class="more">
                <IconSpace type="more" v-bind="DEFAULT_ICON_CONFIGS" size="14" fill="currentColor"></IconSpace>
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import useSiteStore from '../stores/site'
import { IconSpace } from '@icon-space/vue-next/es/all'
import { DEFAULT_ICON_CONFIGS } from "@icon-space/vue-next";

const site = useSiteStore()

const props = defineProps({
    // icon name
    name: {
        type: String,
        default: ''
    },
    // icon zh name
    zhName: {
        type: String,
        default: ''
    },
    card: {
        type: Boolean,
        default: false
    }
})
</script>

<style scoped lang="scss">
.card {
    display: flex;
    height: 64px;
    box-sizing: border-box;

    border: 1px solid var(--color-border);
    cursor: pointer;
    transition: all 0.2s linear;

    &:hover {
        box-shadow: 0 4px 16px rgb(0 0 0 / 10%);
    }

    .left {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 64px;
        height: 64px;
    }

    .right {
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 14px;
        width: 151px;
        .title {
            width: 121px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .more {
            width: 30px;
        }
    }
}
</style>
