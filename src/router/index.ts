import Demo from '@/Demo.vue'
import Gamble from '@/views/gamble/index.vue'
import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
    {path: '/', component: Demo},
    {path: '/gamble', component: Gamble},
]
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})
export default router
