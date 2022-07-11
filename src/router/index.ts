import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'
import { productRoutes } from './modules/product'
import { orderRoutes } from './modules/order'
import { permissionRoutes } from './modules/permission'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '', // 默认子路由
        name: 'home',
        component: () => import('../views/home/Home.vue'),
        meta: {
          title: '首页'
        }
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

router.beforeEach(() => {
  nprogress.start()
})
router.afterEach(() => {
  nprogress.done()
})
export default router
