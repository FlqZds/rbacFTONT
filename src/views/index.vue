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

      <el-submenu :index=index v-for="(item, index) in menu" :key="index">
        <template slot="title"><i class="el-icon-message"></i>{{ item.righttext }}</template>
          <el-menu-item v-for="(c_Item, c_Index) in item.children" :key="c_Index">{{ c_Item.righttext }}</el-menu-item>
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

  // 获取菜单列表
  this.initMenu()
  
},
methods: {
    logout () {
      // 1 vuex 清空
      this.$store.dispatch('asyncUpdateUserInfo', {})
      // 路由到login
      this.$router.push('/login')
    },

    // 菜单列表
    initMenu(){ 
  service({
        method: 'get',
        url: '/menu'
}).then(res => {
    if (res.code === '200') {
      console.log(res.data)

        // this.$store.commit('updateMenuList', res.data)
      this.menu = res.data

    }})
  }


  },

  name: 'Index',
  data() {
    return {
        // msg: 'Hello World,这是首页-rbacFTONT - Index - 基于Vue3.0+Element-Plus的RBAC权限管理系统',
        squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
        // sizeList: ["large", "medium", "small"]

        menu:[]

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
