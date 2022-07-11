import { RouteRecordRaw, RouterView } from 'vue-router'

export const permissionRoutes: RouteRecordRaw[] = [
  {
    path: 'permissions',
    name: 'permissions',
    component: RouterView,
    meta: {
      title: '权限'
    },
    children: [
      {
        path: 'admin',
        name: 'admin',
        component: () => import('../../views/permission/Admin.vue'),
        meta: {
          title: '管理员'
        }
      },
      {
        path: 'role',
        name: 'role',
        component: () => import('../../views/permission/Role.vue'),
        meta: {
          title: '角色'
        }
      },
      {
        path: 'rule',
        name: 'rule',
        component: () => import('../../views/permission/Rule.vue'),
        meta: {
          title: '权限规则'
        }
      }
    ]
  }
]
