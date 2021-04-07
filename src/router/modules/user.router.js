export default [
  {
    path: '/reg',
    name: 'register',
    label: '用户注册',
    component: () => import(/* webpackChunkName: 'register' */'@/pages/user/register.vue')
  },
  {
    path: '/login',
    name: 'login',
    label: '用户登录',
    component: () => import(/* webpackChunkName: 'login' */'@/pages/login/login.vue')
  },
  {
    path: '/forget',
    name: 'forget',
    label: '忘记密码',
    component: () => import(/* webpackChunkName: 'forget' */'@/pages/user/forget.vue')
  },
  {
    path: '/user',
    name: 'user',
    label: '用户',
    component: () => import(/* webpackChunkName: 'user' */'@/pages/user/user.vue')
  }
]