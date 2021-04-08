/**
 * axios的二次封装
 * 目标：
 * 1.给每个请求配置单独的axios实例，每个实例可配置多个统一的拦截器
 * 2.每个实例也可以各自增加多个独立拦截器
 * created by liweitiao
 */
import axios from 'axios'
// 1.devServer. 使用代理解决跨域问题时导入该配置
// import config from '@/config'

// 2.cors. 使用cors解决跨域问题时导入该配置
// import config from '@/config/env'

// 3.mock模拟接口，当mock为true时，打开mock的功能，当为false时，关闭mock功能
const mock = true
if (mock) {
    require('@/mock/api')
}

import store from '@/store'

// 获取时间戳字符串
const getTimeStamp = () => 'timestamp=' + new Date().getTime().toString()

class HttpRequest {
    constructor() {
        // 如果去掉baseURL,则可请求public目录下的json数据
        // this.baseURL = config.baseURL
        this.timeout = 5000
    }

    /**
     * 给每个请求创建一个新的实例去处理请求任务
     * @param {Object} options 请求的参数
     * @return {Promise} 返回一个正在执行中的请求
     */
    request(options) {

        // 当每次请求时，都创建一个独立的实例，实例上设置的拦截器互不影响
        let instance = axios.create()
        let config = {
            ...options,
            baseURL: this.baseURL,
            timeout: this.timeout
        }
        this.setInterceptor(instance)
        return instance(config)
    }
    get(url, config) {
        return this.request({
            method: 'get',
            url,
            ...config
        })
    }
    post(url, data) {
        return this.request({
            method: 'post',
            url,
            data
        })
    }
    // FIXME: 继续封装其他方法
    // ...

    /**
     * 创建axios的实例，当参数boolean为true时，该实例有默认的拦截器，当为false时，则没有
     * @param {Boolean} boolean 默认为true
     * @return {Function} axios的实例
     */
    createInstance(boolean = true) {
        let instance = axios.create({
            baseURL: this.baseURL,
            timeout: this.timeout
        })
        boolean && this.setInterceptor(instance)
        return instance
    }
    // 给实例设置拦截器
    setInterceptor(instance) {
        instance.interceptors.request.use(
            config => {
                // 每次请求的时候，都拿到一个取消请求的方法
                let Cancel = axios.CancelToken
                config.cancelToken = new Cancel(c => {
                    // TODO: 可以将取消函数c存到vuex中，监听页面变化，通过路由钩子beforeEach调用c
                    store.commit('user/pushToken', c) // 订阅模式
                })

                // let url = config.url
                // url = url + (url.indexOf('?') === -1 ? '?' : '&') + getTimeStamp()
                // config.url = url
                // console.log('httpRequest---interceptors01---', url)
                return config
            },
            error => {
                Promise.reject(error)
            }
        )

        instance.interceptors.response.use(
            response => {
                // 服务器返回的结果都会放到data中
                let res = response.data
                let status = res.status
                if (status === 0) { // 0代表请求成功
                    return res
                } else if (status === 10) { // 10代表需要登录
                    window.location.href = '/#/login'
                    return Promise.reject(res)
                } else {
                    return Promise.reject(res)
                }
            },
            error => {
                let res = error.response
                return Promise.reject(res)
            }
        )
    }
}

export default new HttpRequest

/**
------------------------用法示例：------------------------------
示例1: 发起一个请求?
new HttpRequest().request({
  url: 'xxxx',
  method: 'xxxx',
  ...
}).then(data => {}, err => {})

示例2：get请求？
new HttpRequest().get(url, config)

示例3：post请求？
new HttpRequest().post(url, data)

示例4: 创建一个axios实例?
let instance = new HttpRequest().createInstance()
 */
