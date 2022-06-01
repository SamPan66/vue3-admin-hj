import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
const User = {
  template: '<div>User</div>',
}

const routes = [
  { path: '/', component: () => import('@/components/login/index.vue'), },
  {
    path: '/home',
    component: () => import('@/components/main.vue'),
    children: [
      {
        // 当 /user/:id/profile 匹配成功
        // UserProfile 将被渲染到 User 的 <router-view> 内部
        path: 'hello',
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

router.beforeEach((to, from) => {
  console.log(to, from)
})

// 导出路由
export default router;