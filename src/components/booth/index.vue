<template>
    <div class="booth" :class="{ 'booth-checked': name in icon.icons }" @click="click">
        <component :is="components[mode]" :name="name" :zhName="zhName" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ListGrid from './list.vue'
import CardGrid from './card.vue'
import useIconStore from '../../stores/icon'

const icon = useIconStore()

const components: Record<string, any> = {
    list: ListGrid,
    card: CardGrid
}

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
    mode: {
        type: String,
        default: false
    }
})

const checked = ref(false)

const click = () => {
    checked.value = !checked.value
    if (checked.value) {
        icon.add(props.name, props.zhName)
        return
    }
    icon.remove(props.name)
}
</script>

<style lang="scss">
.arco-dropdown-list-wrapper {
    max-height: 250px !important;
}
.booth-checked {
    border: 1px solid rgb(var(--primary-6)) !important;

    &:hover {
        box-shadow: none !important;
    }
}
.booth {
    display: flex;
    width: min-content;
    box-sizing: border-box;

    border: 1px solid var(--color-border);
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s linear;

    &:hover {
        box-shadow: 0 4px 16px rgb(0 0 0 / 10%);
    }
}
</style>
