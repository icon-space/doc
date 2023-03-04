<template>
    <div class="item">
        <div class="header">
            <a-space size="mini" @click="handlerExpand" style="cursor: pointer">
                <IconSpace v-if="expanded" type="down-one" v-bind="DEFAULT_ICON_CONFIGS" theme="filled" :size="20" fill="currentColor"></IconSpace>
                <IconSpace v-if="!expanded" type="left-one" v-bind="DEFAULT_ICON_CONFIGS" theme="filled" :size="20" fill="currentColor"></IconSpace>
                <slot name="header"></slot>
            </a-space>
        </div>
        <div class="body" v-show="expanded">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { IconSpace } from '@icon-space/vue-next/es/all'
import { DEFAULT_ICON_CONFIGS } from '@icon-space/vue-next'

const expanded = ref(true)

const handlerExpand = () => {
    expanded.value = !expanded.value
}
</script>

<style scoped>

</style>