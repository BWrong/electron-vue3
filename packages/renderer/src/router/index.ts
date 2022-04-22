import { createRouter, createWebHashHistory, createWebHistory, type RouteRecordRaw } from 'vue-router';
import routes from './routes';

// 创建路由
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  scrollBehavior: () => ({ top: 0, left: 0 }),
  routes
});
router.beforeEach(async (to) => {
  return
});

// 路由后置守卫
router.afterEach((to) => {
});

export default router;
