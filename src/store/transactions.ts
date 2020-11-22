import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    transactions: [],
    transactionBeingDetailed: null,
    filter: {
      title: '',
      status: ''
    }
  },
  mutations: {
    setTransactions (state, payload) {
      state.transactions = payload
    },
    changeFilter (state, payload) {
      state.filter = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
