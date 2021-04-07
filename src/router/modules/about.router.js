export default [
  {
    path: '/about',
    name: 'about',
    label: '关于我们',
    component: () => import(/* webpackChunkName: 'about' */'@/pages/about/about.vue')
  }
]