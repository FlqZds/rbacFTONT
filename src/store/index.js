import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 全局 state 对象，用于保存所有组件的公共数据
// 保存全局的会话数据（session）
const state = {
  nowList: [],
  soonList: [],
  userInfo: {} // 当前登录用户的信息
}

// 实时监听 state 值的最新状态，注意这里的 getters 可以理解为计算属性
const getters = {
  // 在组件中是通过 this.$store.getters.getUser 来获取
  getNowList (state) {
    return state.nowList
  },
  getSoonList (state) {
    return state.soonList
  },
  getUserInfo (state) {
    return state.userInfo
  }
}

// 同步set  1%
// 定义改变 state 初始值的方法，这里是唯一可以改变 state 的地方，缺点是只能同步执行
const mutations = {
  // 在组件中是通过 this.$store.commit('updateUser', user); 方法来调用 mutations
  updateNowList (state, nowList) {
    state.nowList = nowList
  },
  updateSoonList (state, soonList) {
    state.soonList = soonList
  },
  updateUserInfo (state, userInfo) {
    state.userInfo = userInfo
  }
}

// 异步set  99%
// 定义触发 mutations 里函数的方法，可以异步执行 mutations 里的函数
const actions = {
  // 在组件中是通过 this.$store.dispatch('asyncUpdateUser', user); 来调用 actions
  asyncUpdateNowList (context, nowList) {
    context.commit('updateNowList', nowList)
  },
  asyncUpdateSoonList (context, soonList) {
    context.commit('updateSoonList', soonList)
  },
  asyncUpdateUserInfo (context, userInfo) {
    context.commit('updateUserInfo', userInfo)
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
