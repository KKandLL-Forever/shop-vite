import { RouteRecordRaw, RouterView } from 'vue-router'

export const productRoutes: RouteRecordRaw[] = [
  {
    path: 'product',
    name: 'product',
    component: RouterView,
    children: [
      {
        path: 'productList',
        name: 'productList',
        component: () => import('../../views/product/ProductList/ProductList.vue')
      },
      {
        path: 'productAttr',
        name: 'productAttr',
        component: () => import('../../views/product/ProductAttr/ProductAttr.vue')
      },
      {
        path: 'productClassify',
        name: 'productClassify',
        component: () => import('../../views/product/ProductClassify/ProductClassify.vue')
      },
      {
        path: 'productReply',
        name: 'productReply',
        component: () => import('../../views/product/ProductReply/ProductReply.vue')
      }
    ]
  }
]
