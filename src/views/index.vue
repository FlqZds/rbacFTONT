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
    <el-aside width="200px">Aside</el-aside>
    <el-main>Main    
        <h1>{{ msg }}
        
    </h1></el-main>
  </el-container>
</el-container>

  </div>
</template>

<script>


export default ({
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
