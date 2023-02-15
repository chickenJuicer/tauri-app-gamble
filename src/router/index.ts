import Demo from '@/Demo.vue'
import Gamble from '@/views/gamble/index.vue'
import Config from '@/views/config/index.vue'
import Error404 from '@/views/error/error_404.vue'
import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
    {path: '/', component: Demo},
    {path: '/gamble', component: Gamble},
    {path: '/config', component: Config},
    //异常走到404;
    {path:'/:pathMatch(.*)*', component: Error404}
]
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})
export default router
