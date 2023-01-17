import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        // @ts-ignore
        component: ()=> import("../components/To.vue")
    },
    {
        path: '/b',
        // @ts-ignore
        component: () => import("../components/Ref.vue")
    }
]

const router = createRouter({
    history: createWebHashHistory('/'),  // 设置为history模式，就是路径里面没有#,  createWebHashHistory 是默认的，括号里面的就是基础路径，可以理解为项目名称，就是请求路径的基础url
    routes
})

export default router
