import axios from 'axios'

const service = axios.create({
    baseURL: '/api',
    timeout: 3000
})

// 实例不能再继续创建实例
// const instance = service.create({
//   baseURL: '/api',
//   timeout: 3000
// })

service.interceptors.request.use(
    config => {
        let url = config.url
        const timeStamp = 'timestamp=' + new Date().getTime().toString()
        url = url + (url.indexOf('?') === -1 ? '?' : '&') + timeStamp
        config.url = url
        console.log('service---interceptors01---', url, config)
        return config
    },
    error => {
        Promise.reject(error)
    }
)

service.interceptors.response.use(
    response => {
      let res = response.data
      let status = res.status
      if(status === 0) {
        return res.data
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

  export {
    service
  }