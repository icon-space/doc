<template>
    <Content></Content>
    <Right></Right>
</template>

<script setup lang="ts">
import Content from './content.vue'
import Right from './right.vue'
import { IconProvider } from '@icon-space/vue-next'
import useOptionStore from '../../stores/option'

const option = useOptionStore()

IconProvider(option.$state)
</script>

<style scoped lang="scss"></style>
