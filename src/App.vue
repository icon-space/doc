<template>
    <router-view></router-view>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import useSiteStore from './stores/site'

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
