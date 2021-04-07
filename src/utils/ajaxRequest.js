/**
 * axios的二次封装
 * created by liweitiao
 */
import axios from 'axios'

class AjaxRequest {
  constructor() {
    this.baseURL = '/api'
    this.timeout = 3000
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
        let url = config.url
        const timeStamp = 'timestamp=' + new Date().getTime().toString()
        url = url + (url.indexOf('?') === -1 ? '?' : '&') + timeStamp
        config.url = url
        return config
      },
      error => {
        Promise.reject(error)
      }
    )

    instance.interceptors.response.use(
      response => {
        let res = response.data
        let status = res.status
        if(status === 0) {
          return res
        } else if(status === 10) {
          window.location.href = '/#/login'
          return Promise.reject(res)
        } else {
          return Promise.reject(res)
        }
      }, error => {
        let res = error.response
        return Promise.reject(res)
      }
    )
  }
}

export default new HttpRequest

/**
------------------------用法例如：------------------------------
用法1: 发起一个请求?
new HttpRequest().request({
  url: 'xxxx',
  method: 'xxxx',
  ...
}).then(data => {}, err => {})

用法2: 创建一个axios实例?
let instance = new HttpRequest().createInstance()
 */
