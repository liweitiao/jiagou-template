<template>
  <div id="app">
    <el-container>
      <!-- <el-header>
        <PageHeader></PageHeader>
      </el-header> -->
      <el-main style="padding:0">
        <router-view></router-view>
        <br>
        <el-input v-focus></el-input>
        <el-button v-permission="'edit'">编辑</el-button>
        <el-button v-permission="'add'" v-debounce="{callback:close, delay: 5000}">添加</el-button>
        <Menu></Menu>
      </el-main>
      
      <!-- <el-footer>
        <PageFooter></PageFooter>
      </el-footer> -->
    </el-container>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import PageFooter from "@/components/PageFooter.vue";
import Menu from '@/components/Menu.vue'

export default {
  name: "app",
  components: {
    PageHeader,
    PageFooter,
    Menu
  },
  methods: {
    close() {
      console.log('close')
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.el-header {
  background: #333;
}
.el-footer {
  background: #333;
}
.el-main {
  min-height: calc(100vh - 120px);
}
</style>
