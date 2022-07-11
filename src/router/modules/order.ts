import { RouteRecordRaw, RouterView } from 'vue-router'

export const orderRoutes: RouteRecordRaw[] = [
  {
    path: 'order',
    name: 'order',
    component: RouterView,
    children: [
      {
        path: 'orderList',
        name: 'orderList',
        component: () => import('../../views/order/OrderList.vue')
      },
      {
        path: 'orderOffline',
        name: 'orderOffline',
        component: () => import('../../views/order/orderOffline.vue')
      }
    ]
  }
]
