import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import '@/plugins/element'
// 使用指令
import '@/directive'

Vue.use(VueAxios, axios)

// axios.defaults.baseURL = 'http://127.0.0.1:8000/'
// axios.defaults.baseURL = '/api'
// axios.defaults.timeout = 1000

// 拦截器是可以有多个的
// 这种方式的拦截器是会互相影响的，不能单独为某些接口设置拦截器
// axios.interceptors.request.use(
//   config => {
//     let url = config.url
//     const timeStamp = 'timestamp=' + new Date().getTime().toString()
//     url = url + (url.indexOf('?') === -1 ? '?' : '&') + timeStamp
//     config.url = url
//     console.log('url---config2---', url, config)

//     return config
//   },
//   error => {
//     Promise.reject(error)
//   }
// )

// axios.interceptors.request.use(
//   config => {
//     let url = config.url
//     console.log('url---config1---', url, config)
//     return config
//   },
//   error => {
//     Promise.reject(error)
//   }
// )




// axios.interceptors.response.use(
//   response => {
//     let res = response.data
//     let status = res.status
//     console.log('res--status---', status)
//     if(status === 0) {
//       return res.data
//     } else if(status === 10) {
//       window.location.href = '/#/login'
//       return Promise.reject(res)
//     } else {
//       console.log('res---', res)
//       return Promise.reject(res)
//     }
//   }, error => {
//     let res = error.response
//     // console.log('interceptor---', res)
//     return Promise.reject(res)
//   }
// )



Vue.config.productionTip = false

// 获取用户权限 
// router.beforeEach(async (to, from, next) => {
//   if (!store.state.hasPermission) {
//     let newRoutes = await store.dispatch('getNewRoute')
//     router.addRoutes(newRoutes) // 动态添加有权限的路由
//     next({...to})
//   } else {
//     next()
//   }
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export {
  axios
}