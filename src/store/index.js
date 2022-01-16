import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem("token"),
    userInfo: {},
    initialMember: 2,
    initialBillName: '',
  },
  mutations: {
    setToken: (state, token) => {
      state.token = token
      localStorage.setItem("token", token)
    },
    setUserInfo: (state, userInfo) => {
      state.userInfo = userInfo
    },
    removeInfo: (state) => {
      localStorage.removeItem("token")
      state.token = ''
      state.userInfo = {}
    },
    setInitialMember(state, payload) {
      state.initialMember = payload
    },
    setInitialBillName(state, payload) {
      state.initialBillName = payload
    },
  },
  actions: {
  },
  modules: {
  }
})
