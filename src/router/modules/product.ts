import { RouteRecordRaw, RouterView } from 'vue-router'

export const productRoutes: RouteRecordRaw[] = [
  {
    path: 'product',
    name: 'product',
    component: RouterView,
    meta: {
      title: '商品'
    },
    children: [
      {
        path: 'productList',
        name: 'productList',
        component: () => import('../../views/product/ProductList/ProductList.vue'),
        meta: {
          title: '商品列表'
        }
      },
      {
        path: 'productAttr',
        name: 'productAttr',
        component: () => import('../../views/product/ProductAttr/ProductAttr.vue'),
        meta: {
          title: '商品规格'
        }
      },
      {
        path: 'productClassify',
        name: 'productClassify',
        component: () => import('../../views/product/ProductClassify/ProductClassify.vue'),
        meta: {
          title: '商品分类'
        }
      },
      {
        path: 'productReply',
        name: 'productReply',
        component: () => import('../../views/product/ProductReply/ProductReply.vue'),
        meta: {
          title: '商品评论'
        }
      }
    ]
  }
]
