import {axios} from '../../main'

const instance = axios.create()

// 实例也可以实现多个拦截器
instance.interceptors.request.use(
    config => {
      let url = config.url
      console.log('url---config2---', url, config)
  
      return config
    },
    error => {
      Promise.reject(error)
    }
  )

// instance.interceptors.request.use(
//     config => {
//         let url = config.url
//         console.log('url---config5---', url, config)

//         return config
//     },
//     error => {
//         Promise.reject(error)
//     }
// )
const getUser01 = () => {
    return instance.get('/user01')
}

const getUser02 = () => {
    return instance.get('/user02')
}

const getUser03 = () => {
    return instance.get('/user03')
}

export default {
    axios,
    getUser01,
    getUser02,
    getUser03
}
