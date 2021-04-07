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
service.interceptors.request.use(
    config => {
        let url = config.url
        console.log('service---interceptors02---', url)
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
