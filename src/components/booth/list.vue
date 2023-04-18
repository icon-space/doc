<template>
    <div class="list-left">
        <IconSpace :type="name"></IconSpace>
    </div>
    <div class="list-right">
        <a-space direction="vertical" size="mini" v-if="site.lang === 'zh'" class="title">
            <span>{{ zhName }}</span>
            <span>
                <small>{{ getName(name, zhName) }}</small>
            </span>
        </a-space>
        <span v-else class="title">{{ getName(name, zhName) }}</span>
        <span class="more">
            <a-dropdown @select="action" @click="click">
                <a-button shape="circle" type="text" size="mini">
                    <template #icon>
                        <IconSpace type="more" size="14" fill="currentColor"></IconSpace>
                    </template>
                </a-button>
                <template #content>
                    <a-doption v-for="(v, k) in actions" :value="k">{{ $t(k) }}</a-doption>
                </template>
            </a-dropdown>
        </span>
    </div>
</template>

<script setup lang="ts">
import { IconSpace } from '@icon-space/vue-next/es/all'
import useSiteStore from '../../stores/site'
import useBooth from './useBooth'

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
    }
})

const site = useSiteStore()

const { getName, actions, action } = useBooth(props.name, props.zhName)

const click = (e: Event) => {
    e.stopPropagation()
}
</script>

<style scoped lang="scss">
.list-left {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
}

.list-right {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 14px;
    height: 64px;
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
</style>
