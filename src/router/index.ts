import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    name: 'home',
    path: '/home',
    component: () => import('../views/home/index.vue')
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('../views/login/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
