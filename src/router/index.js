import Vue from 'vue'
import Router from 'vue-router'
import index  from '../views/index'
import login  from '../views/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index,
      path:'/login', 
      component: login
    }
  ]
})
