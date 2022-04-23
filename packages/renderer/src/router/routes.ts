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
        path: '/about',
        component: () => import('@/views/About.vue')
      },
      {
        path: '/setting',
        component: () => import('@/views/Setting.vue')
      }
    ]
  }
];
export default routes;
