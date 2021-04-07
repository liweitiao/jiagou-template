<template>
    <div>
        user page
        <button @click="cancelToken">取消请求</button>
    </div>
</template>

<script>
import store from '@/store'
import API from '@/service/user'
import fetch from '@/service/user/user.js'
import fetch02 from '@/service/user/user02.js'
import HTTP01 from '@/service/user/userHttp01'
import HTTP02 from '@/service/user/userHttp02'
// console.log('HTTP01---', HTTP01)


export default {
    methods: {
        cancelToken() {
            store.commit('user/clearToken')
        },
        async getUser01() {
            let res = await HTTP01.getUser01()
            return res 
        },
        async getUser02() {
            let res = await HTTP01.getUser02()
            return res 
        },
        async getUser03() {
            let res = await HTTP01.getUser03()
            return res 
        }
    },
    async mounted() {
        // console.log(this.axios)
        let i = 1

        // HTTP01.getUser01().then(res => {
        //     console.log(`user--res--${i++}--`, res)
        // }, err => {
        //     console.log('err----', err)
        // })

        // let p1 = await this.getUser01()
        // console.log('p1---', p1)

        // this.getUser02().then(res => {
        //     console.log(`user--res--${i++}--`, res)
        // }, err => {
        //     console.log('err----', err)
        // })

        // this.getUser03().then(res => {
        //     console.log(`user--res--${i++}--`, res)
        // }, err => {
        //     console.log('err----', err)
        // })

        HTTP01.getUser01().then(res => {
            console.log(`HTTP01--response--${i++}--`, res)
        }, err => {
            console.log('HTTP01--response--err----', err)
        })

        HTTP01.getUser02().then(res => {
            console.log(`HTTP01--response--${i++}--`, res)
        }, err => {
            console.log('HTTP01--response--err----', err)
        })

        // HTTP01.getUser03().then(res => {
        //     console.log(`user--res--${i++}--`, res)
        // }, err => {
        //     console.log('err----', err)
        // })

        // API.getUser().then(res => {
        //     console.log(`uer--res--${i++}--`, res)
        // }, err => {
        //     // console.log('err----', err)
        // })

        // fetch.getUser01().then(res => {
        //     console.log(`user--res--${i++}--`, res)
        // }, err => {
        //     console.log('err----', err)
        // })
        // API.getUser01().then(res => {
        //     console.log(`uer--res--${i++}--`, res)
        // }, err => {
        //     // console.log('err----', err)
        // })

        // fetch02.getUser02().then(res => {
        //     console.log(`uer--res--${i++}--`, res)
        // }, err => {
        //     // console.log('err----', err)
        // })

        // this.axios.get('/user02').then(res => {
        //     console.log(`uer--res--${i++}--`, res)
        // }, err => {
        //     // console.log('err----', err)
        // })
        // API.getUser03().then(res => {
        //     console.log(`uer--res--${i++}--`, res)
        // }, err => {
        //     // console.log('err----', err)
        // })
    }
}
</script>
