import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/page/Home.vue"
import Test from "./components/page/Test.vue"

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/test',
        name: 'Test',
        component: Test
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router