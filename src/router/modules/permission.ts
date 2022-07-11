import { RouteRecordRaw, RouterView } from 'vue-router'

export const permissionRoutes: RouteRecordRaw[] = [
  {
    path: 'permissions',
    name: 'permissions',
    component: RouterView,
    children: [
      {
        path: 'admin',
        name: 'admin',
        component: () => import('../../views/permission/Admin.vue')
      },
      {
        path: 'role',
        name: 'role',
        component: () => import('../../views/permission/Role.vue')
      },
      {
        path: 'rule',
        name: 'rule',
        component: () => import('../../views/permission/Rule.vue')
      }
    ]
  }
]
