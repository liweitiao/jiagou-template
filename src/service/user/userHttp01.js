import axios from '@/utils/httpRequest'

// console.log('userHttp01---axios----', axios)

let instance = axios.createInstance()
// console.log('userHttp01---instance----', instance)

instance.interceptors.request.use(
    config => {
        let url = config.url
        console.log('userHttp01---interceptors02---', url)
        return config
    },
    error => {
        Promise.reject(error)
    }
)


// const getUser01 = () => {
//     return axios.request({
//         url: '/user01'
//     })
// }

// const getUser01 = () => {
//     return instance.request({
//         url: '/user01',
//         method: 'POST'
//     })
// }

const getUser01 = () => {
    return instance.get('/user01')
}

const getUser02 = () => {
    return axios.post('/user02', {"name": "sss"})
}

const getUser03 = () => {
    return instance.request({
        url: '/user03',
        method: 'POST'
    })
}

export default {
    getUser01,
    getUser02,
    getUser03
}