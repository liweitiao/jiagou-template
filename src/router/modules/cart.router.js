export default [
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