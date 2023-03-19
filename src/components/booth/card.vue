<template>
    <div class="card">
        <a-dropdown @select="action" trigger="hover">
            <div class="card-icon">
                <IconSpace :type="name"></IconSpace>
            </div>
            <template #content>
                <a-doption v-for="(v, k) in actions" :value="k">{{ $t(k) }}</a-doption>
            </template>
        </a-dropdown>
    </div>
</template>

<script setup lang="ts">
import { IconSpace } from '@icon-space/vue-next/es/all'
import useBooth from './useBooth'

const props = defineProps({
    // icon name
    name: {
        type: String,
        default: ''
    },
    zhName: {
        type: String,
        default: ''
    }
})

const { actions, action } = useBooth(props.name, props.zhName)
</script>

<style scoped lang="scss">
.card {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;

    .card-icon {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>
