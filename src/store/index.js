import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    initialMember: 2,
    initialBillName: '',
  },
  mutations: {
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
