import Transaction from '@/typings/transaction'
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
    changeFilterTitle (state, payload) {
      state.filter.title = payload.toLowerCase()
    },
    changeFilterStatus (state, payload) {
      state.filter.status = payload
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    currentTransactions: state => {
      return state.transactions.filter((transaction: Transaction) => {
        return transaction.title.toLowerCase().includes(state.filter.title) &&
               (state.filter.status === '' || transaction.status === state.filter.status)
      })
    }
  }
})
