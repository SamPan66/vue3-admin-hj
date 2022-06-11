import { createRouter,createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router';
const User = {
  template: '<div>User</div>',
}

const routes = [
  { path: '/', name: '/', component: () => import('@/components/login/index.vue'), },
  { path: '/login', name: 'login', component: () => import('@/components/login/index.vue'), },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/components/main.vue'),
    children: [
      {
        // 当 /user/:id/profile 匹配成功
        // UserProfile 将被渲染到 User 的 <router-view> 内部
        path: 'hello',
        name: 'hello',
        component: () => import('@/components/HelloWorld.vue')
      }]
  },
  { path: '/user', component: () => import('@/components/login/index.vue') }
]
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})

let isAuthenticated:boolean = true;

router.beforeEach(async (to, from) => {
  if (
    // 检查用户是否已登录
    !isAuthenticated &&
    // ❗️ 避免无限重定向
    to.name !== 'login'
  ) {
    // 将用户重定向到登录页面
    return { name: 'login' }
  }
})

// 导出路由
export default router;