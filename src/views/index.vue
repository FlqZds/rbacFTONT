<template>
  <div class="index">

    <el-container>
    <el-header>

    <div class="logo">
      <img src="../assets/logo.png" alt="我是logo" class="src" height="60px"/>
    </div>

    <div class="user">
      <div class="demo-basic--circle">
      <el-avatar shape="square" :size="50" :src="squareUrl"></el-avatar>
        <el-link type="primary" @click="logout">注销</el-link>
      </div>
    </div>

   </el-header>
   <el-container>
    <el-aside width="200px">

      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>资源管理</template>

          <el-menu-item index="1-1">资源列表</el-menu-item>
          <el-menu-item index="1-2">资源添加</el-menu-item>
          <el-menu-item index="1-3">资源审核</el-menu-item>

      </el-submenu>

      <el-submenu index="2">
        
        <template slot="title"><i class="el-icon-menu"></i>用户管理</template>
    
          <el-menu-item index="2-1">信息编辑</el-menu-item>
          <el-menu-item index="2-2">用户列表</el-menu-item>
          <el-menu-item index="2-3">用户日志</el-menu-item>

      </el-submenu>

      <el-submenu index="3">
        
        <template slot="title"><i class="el-icon-setting"></i>其他设置</template>
          <el-menu-item index="3-1">主题美化</el-menu-item>
          <el-menu-item index="3-2">AI集成</el-menu-item>
          <el-menu-item index="3-3">小·工具</el-menu-item>
        
      </el-submenu>
    </el-menu>
  </el-aside>

    </el-aside>

    <el-main>   Main    </el-main>
   </el-container>
   </el-container>

  </div>
</template>

<script>

import service from '../utils/request'
import store from '../store'

export default ({
// beforeRouteEnter (to, from, next) {
//   // ...
//   if (store.getters.getUserInfo.id) {
//     return next()
//   }
//   // next('/login')
// },
created () {
  service({
    method:'get',
    url:'/infoCheck',
    params: {
      "token": store.getters.getToken
    }
  })
},
methods: {
    logout () {
      // 1 vuex 清空
      this.$store.dispatch('asyncUpdateUserInfo', {})
      // 路由到login
      this.$router.push('/login')
    }

  },

  name: 'Index',
  data() {
    return {
        // msg: 'Hello World,这是首页-rbacFTONT - Index - 基于Vue3.0+Element-Plus的RBAC权限管理系统',
        squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
        // sizeList: ["large", "medium", "small"]

    }
  },
});
</script>


<style scoped>

  .index {
    height: 100%;
  }

  .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    display: flex;
    line-height: 60px;
  }

  .el-header div{
   flex: 1 
  }

  div.logo{
    text-align: left;
  }
  div.user{
    text-align: right;
    line-height: 100px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
</style>
