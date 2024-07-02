export const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default.vue'),
    children: [
      {
        path: 'users',
        component: () => import('@/pages/user/UserManage.vue'),
      },
      {
        path: 'users/detail',
        component: () => import('@/pages/user/UserDetail.vue'),
      },
      {
        path: 'plans',
        component: () => import('@/pages/subscription/PlanManage.vue'),
      },
      {
        path: 'subscription',
        component: () => import('@/pages/subscription/SubscriptionManage.vue'),
      },
    ],
  },
  {
    path: '/',
    component: () => import('@/layouts/blank.vue'),
    children: [
      {
        path: 'login',
        component: () => import('@/pages/login.vue'),
      },
      {
        path: '/:pathMatch(.*)*',
        component: () => import('@/pages/[...error].vue'),
      },
    ],
  },
]
