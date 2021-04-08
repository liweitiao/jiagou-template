<template>
  <div>
    home1 page
  </div>
</template>

<script>
import API from '@/service/user/userHttp01'
console.log('home1---API----', API)
export default {
  mounted() {
    API.getUser05().then(res => {
      console.log('hom1---', res)
    })
  }
}
</script>