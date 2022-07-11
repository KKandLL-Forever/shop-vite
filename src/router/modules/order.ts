import { RouteRecordRaw, RouterView } from 'vue-router'

export const orderRoutes: RouteRecordRaw[] = [
  {
    path: 'order',
    name: 'order',
    component: RouterView,
    meta: {
      title: '订单'
    },
    children: [
      {
        path: 'orderList',
        name: 'orderList',
        component: () => import('../../views/order/OrderList.vue'),
        meta: {
          title: '订单列表'
        }
      },
      {
        path: 'orderOffline',
        name: 'orderOffline',
        component: () => import('../../views/order/orderOffline.vue'),
        meta: {
          title: '订单offline'
        }
      }
    ]
  }
]
