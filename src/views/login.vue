@<template>
  <div class="login">
    <h1>Login</h1>

    <div class="logo">
      <img src="../assets/logo.png" alt="logo" width="10%">
    </div>

    <el-form label-position="top-left" :model="user">
        <el-form-item label="用户名">
          <el-input v-model="user.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="user.userPassword" placeholder="请输入密码" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-row :gutter="20">
            <el-col :span="6" :offset="6"><el-button type="primary" @click="login">提交</el-button></el-col>
            <el-col :span="6"><el-button @click="user={}">重置</el-button></el-col>
          </el-row>
        </el-form-item>
      </el-form>


  </div>
</template>

<script>

import service from '../utils/request';


export default {
data() {
    return {
        user:{}    
    }
},
methods: {
    login() {
        service({
            method: 'get',
            url: '/login',
            params: this.user
        }).then(res => {
            console.log(res);
            if (res.status === 200) {
                console.log('登录成功');
                // this.$store.commit('updateUserInfo', res.data)
                
                this.$router.push('/index')
    }})
}
}
}
</script>

<style>

.login{
        width: 400px;
        height: 350px;
        background-color:darkgrey;
        border: solid 1px #dcdfe6;
        border-radius: 37px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        padding: 60px;
    }
    .login .logo{
        text-align: center;
    }

</style>