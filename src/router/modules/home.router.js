export default [
  {
    path: '/home1',
    name: 'home1',
    label: '首页',
    component: () => import(/* webpackChunkName: 'home' */'@/pages/home1.vue')
  },
  {
    path: '*',
    name: '404',
    label: '页面错误',
    component: () => import(/* webpackChunkName: '404' */'@/pages/404.vue')
  }
]