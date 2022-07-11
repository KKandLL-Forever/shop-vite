import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'
import { productRoutes } from './modules/product'
import { orderRoutes } from './modules/order'
import { permissionRoutes } from './modules/permission'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '', // 默认子路由
        name: 'home',
        component: () => import('../views/home/Home.vue')
      },
      ...productRoutes,
      ...orderRoutes,
      ...permissionRoutes
    ]
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('../views/login/Login.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
