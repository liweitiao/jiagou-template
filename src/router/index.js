import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '@/store'
// import home from '@/pages/home.vue'
// import index from '@/pages/index/index.vue'
// import axios from '@/utils/httpRequest'

Vue.use(VueRouter)

// const routes = []
// // 通过执行webpack的require.context获取特定的上下文, 实现模块自动化导入
// const files = require.context('./modules', false, /\.router.js$/)
// files.keys().forEach( key => {
//   routes.push(...files(key).default)
// })
// console.log('routes222-----', routes)

// console.log('store----', store)
// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: home,
//     redirect: '/index',
//     children: [
//       {
//         path: '/index',
//         name: 'index',
//         label: '首页',
//         component: index
//       },
//       {
//         path: '/login',
//         name: 'login',
//         label: '登录',
//         // 路由懒加载中给 Webpack Chunks 命名，当加载该模块时，在浏览器的Network中可以显示模块名
//         component: () => import(/* webpackChunkName: "login" */ '@/pages/login/login.vue')
//       },
//       {
//         path: '/about',
//         name: 'about',
//         label: '关于',
//         component: () => import(/* webpackChunkName: "about" */ '@/pages/about/about.vue')
//       },
//       {
//         path: '/user',
//         name: 'user',
//         label: '用户',
//         component: () => import(/* webpackChunkName: "user" */ '@/pages/user/user.vue')
//       }
//     ]
//   }
// ]

export const authRoutes = [
  {
    path: '/cart',
    name: 'cart',
    label: '购物车',
    component: () => import(/* webpackChunkName: 'cart' */'@/pages/cart/cart.vue'),
    children: [
      {
        path: 'cart-list',
        name: 'cart-list',
        label: '购物车列表',
        component: () => import(/* webpackChunkName: 'cartList' */'@/pages/cart/cartList.vue'),
        children: [
          {
            path: 'lottery',
            name: 'lottery',
            label: '彩票',
            component: () => import(/* webpackChunkName: 'lottery' */'@/pages/cart/lottery.vue')
          },
          {
            path: 'product',
            name: 'product',
            label: '商品',
            component: () => import(/* webpackChunkName: 'product' */'@/pages/cart/product.vue'),
            children: [
              {
                path: 'fruit',
                name: 'fruit',
                label: '水果',
                component: () => import(/* webpackChunkName: 'fruit' */'@/pages/cart/fruit.vue'),
              }
            ]
          }
        ]
      },
      {
        path: 'noBuy',
        name: 'noBuy',
        label: '还未购买',
        component: () => import(/* webpackChunkName: 'noBuy' */'@/pages/cart/noBuy.vue'),
      }
    ]
  }
]


// export { routes }

export default new VueRouter({
// const router = new VueRouter({
  mode: 'history',
  // routes,
  base: process.env.BASE_URL,
  // routes,
  routes: [
    {
      path: '/home1',
      name: 'home1',
      component: () => import(/* webpackChunkName: 'home1' */'@/pages/home1.vue')
    },
    {
      path: '*',
      // name: '404', // name设置为404时，会影响动态添加的路由的匹配
      // name: 'Not Found111', // 测试了，是只要有name的属性，都会影响动态路由的匹配
      component: () => import(/* webpackChunkName: '404' */'@/pages/404.vue')
    },
    // {
    //   path: '/cart',
    //   name: 'cart',
    //   component: () => import(/* webpackChunkName: 'cart' */'@/pages/cart/cart.vue')
    // }
  ]
})
// console.log(process.env.BASE_URL)
// export default router
// export {
//   routes,
//   router
// }