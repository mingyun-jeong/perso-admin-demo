export const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default.vue'),
    children: [
      {
        path: 'users',
        component: () => import('@/pages/user/user-manage.vue'),
      },
      {
        path: 'users/detail',
        component: () => import('@/pages/user/user-detail.vue'),
      },
      {
        path: 'plans',
        component: () => import('@/pages/subscription/plan-manage.vue'),
      },
      {
        path: 'subscription',
        component: () => import('@/pages/subscription/subscription-manage.vue'),
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
