import type { RouteRecordRaw } from 'vue-router'

import LayoutIndex from '../layouts/index.vue'

import ViewHome from '../views/home/index.vue'

export const routes: RouteRecordRaw[] = [
    {
        name: 'layout',
        path: '/',
        component: LayoutIndex,
        children: [
            {
                name: 'home',
                path: '/',
                component: ViewHome
            }
        ]
    }
]
