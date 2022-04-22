import type { RouteRecordRaw } from 'vue-router';
// 静态路由
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('@/layouts/DefaultLayout.vue'),
    children: [
      {
        path: '/home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: '/test',
        component: () => import('../views/Test/index.vue')
      },
      {
        path: '/about',
        component: () => import('../views/About/index.vue')
      },
      {
        path: '/setting',
        component: () => import('../views/Setting/index.vue')
      }
    ]
  }
];
export default routes;
