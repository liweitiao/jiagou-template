
<template>
  <!-- 24格栅格化功能 -->
  <el-row class="header-row">
    <el-col :span="18">
      <el-menu
        class="menu"
        mode="horizontal"
        background-color="#333"
        text-color="#fff"
        active-text-color="fff"
        :router="true"
      >
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/post">发表文章</el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="6">
      <div class="nav-right">
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          background-color="#333"
          text-color="#fff"
          active-text-color="fff"
        >
          <template>
            <el-menu-item index="login">
              <router-link to="/login">登录</router-link>
            </el-menu-item>
            <el-menu-item index="reg">
              <router-link to="/reg">注册</router-link>
            </el-menu-item>
          </template>
          <el-submenu index="profile">
            <template slot="title">{{}}</template>
            <el-menu-item @click="$router.push('/manager')">管理后台</el-menu-item>
            <el-menu-item index="logout" @click="logout">退出登录</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  methods:{
    logout(){
    } 
  }
};
</script>

<style>
.header-row .logo {
  margin: 5px;
  height: 50px;
}

.header-row .logo, .menu {
  display: inline-block;
}

.header-row .nav-right {
  float: right;
}

.header-row .nav-right li{
  display: inline-block;
  text-align: center;
  line-height: 60px;
}

.header-row .nav-right a{
  color: #fff;
}
</style>
