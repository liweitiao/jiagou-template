// import {axios} from '../../main'
import {service} from '@/utils/fetch'

// axios.interceptors.request.use(
//     config => {
//       let url = config.url
//       console.log('url---config3---', url, config)
  
//       return config
//     },
//     error => {
//       Promise.reject(error)
//     }
//   )

// irc-web封装的axios的有问题，拦截器会相互影响
// let instance= service.create({
//     baseURL: '/api'
// })

service.interceptors.request.use(
    config => {
        let url = config.url
        console.log('service---interceptors03---', url)
        return config
    },
    error => {
        Promise.reject(error)
    }
)


const getUser = (params) => {
    return service.get('/user')
}

const getUser01 = (params) => {
    return service.get('/user01')
}

const getUser02 = () => {
    return service.get('/user02')
}

const getUser03 = () => {
    return service.get('/user03')
}

export default {
    service,
    getUser,
    getUser01,
    getUser02,
    getUser03
}
