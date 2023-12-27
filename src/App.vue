<template>
    <router-view></router-view>
</template>

<script setup lang="ts">
import { onMounted,onBeforeMount } from 'vue'
import { useSessionStorage } from '@vueuse/core'
import {useRouter} from "vue-router";
import useSiteStore from './stores/site'

const router = useRouter()
const redirect = useSessionStorage('redirect', '')

onBeforeMount(async () => {
    if (redirect.value) {
        await router.push(redirect.value)
        redirect.value = ''
    }
})

const site = useSiteStore()

onMounted(() => {
    site.init()
})
</script>

<style lang="scss">
body {
    height: 100vh;
    width: 100%;
    min-width: max-content;
}
</style>
