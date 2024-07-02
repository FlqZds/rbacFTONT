@<template>
  <div>
    <h1>Login</h1>

    <el-form label-position="top" label-width="80px" :model="user">
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
            method: 'post',
            url: '/login',
            params: this.user
        }
        ).then(res => {
            console.log(res);
            if (res.code === 200) {
    }})
}
}
}
</script>

<style>

.login{
        width: 400px;
        height: 300px;
        background-color:darkgrey;
        border: solid 1px #dcdfe6;
        border-radius: 10px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        padding: 40px;
    }
    .login .logo{
        text-align: center;
    }

</style>