import Vue from 'vue'
import Router from 'vue-router'
import index  from '../views/index'
import login  from '../views/login'
import sourceList  from '../views/index/sourceList.vue'
import userLog  from '../views/index/userLog.vue'
import toolKits  from '../views/index/toolKits.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: index,
      children: [
        {
          path: '/source/list',
          name: 'sourceList',
          component:sourceList
        },
        {
          path: '/source/list',
          name: 'sourceList',
          component:sourceList
        },
        {
          path: '/source/list',
          name: 'sourceList',
          component:sourceList
        },
        // 其他设置
        {
          path: '/setting/tinykits',
          name: 'toolKits',
          component: toolKits
        },
        {
          path: '/setting/tinykits',
          name: 'toolKits',
          component: toolKits
        },
        {
          path: '/setting/tinykits',
          name: 'toolKits',
          component: toolKits
        },
        // 用户管理
        {
          path: '/user/logger',
          name: '',
          component:userLog
        },
        {
          path: '/user/logger',
          name: '',
          component:userLog
        },
        {
          path: '/user/logger',
          name: '',
          component:userLog
        },
      ]
    },
    {
      path:'/login', 
      component: login
    }
  ]
})
