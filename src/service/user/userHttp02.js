import axios from '@/utils/httpRequest'

// console.log('userHttp02---axios----', axios.id)


// axios.interceptors.request.use(
//     config => {
//         let url = config.url
//         console.log('userHttp02---interceptors02---', url)
//         return config
//     },
//     error => {
//         Promise.reject(error)
//     }
// )

const getUser01 = () => {
    return axios.request({
        url: '/user01'
    })
}

const getUser02 = () => {
    return axios.request({
        url: '/user02'
    })
}

const getUser03 = () => {
    return axios.request({
        url: '/user03'
    })
}

export default {
    getUser01,
    getUser02,
    getUser03
}