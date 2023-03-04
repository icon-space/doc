<template>
    <Content></Content>
    <Right :form="config"></Right>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import Content from './content.vue'
import Right from './right.vue'
import { IconProvider } from '@icon-space/vue-next/es'
import type { IIconConfig } from '@icon-space/vue-next/es/runtime'

const config = reactive<IIconConfig>({
    size: 24,
    strokeWidth: 4,
    theme: 'outline',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    colors: {
        outline: {
            fill: '#333',
            background: 'transparent'
        },
        filled: {
            fill: '#333',
            background: '#FFF'
        },
        twoTone: {
            fill: '#333',
            twoTone: '#2F88FF'
        },
        multiColor: {
            outStrokeColor: '#333',
            outFillColor: '#2F88FF',
            innerStrokeColor: '#FFF',
            innerFillColor: '#43CCF8'
        }
    },
    rtl: false,
    prefix: 'i'
})

IconProvider(config)
</script>

<style scoped lang="scss"></style>
