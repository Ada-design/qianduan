// 创建一个路由器，并暴露出去

// 第一步：引入createRouter
import { createRouter, createWebHistory } from 'vue-router'


// 第二步：创建一个可以被 Vue 应用使用的 Router 实例。
const router = createRouter({
    history: createWebHistory(), // 路由器的工作模式
    routes: [
        // 一个一个的路由规则
        {
            path: '/', // 路由路径
            name: 'home', // 路由名称
            component: () => import('@/views/HomeDemo.vue') // 路由组件
        },
        {
            path: '/about', // 路由路径
            name: 'about', // 路由名称
            component: () => import('@/views/AboutDemo.vue') // 路由组件
        },
        {
            path: '/news', // 路由路径
            name: 'news', // 路由名称
            component: () => import('@/views/NewsDemo.vue'), // 路由组件
            // 子路由
            children: [
                {
                    name:'detail',
                    path: 'detail/:id/:title/:content',
                    component: () => import('@/views/news/news1-content.vue'),
                    props:true
                },
                {
                    name:'detail2',
                    path: 'detail2/:id/:title/:content',
                    component: () => import('@/views/news/news2-content.vue')
                },
                {
                    name:'detail3',
                    path: 'detail3/:id/:title/:content',
                    component: () => import('@/views/news/detail-content.vue')
                }
            ]
        }
    ]
})

// 路由router暴露出去
export default router