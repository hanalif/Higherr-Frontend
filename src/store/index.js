import Vue from 'vue'
import Vuex from 'vuex'
import gigStore from './modules/gig-store.js'
import userStore from './modules/user-store.js'
import orderStore from './modules/order-store.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    gigStore,
    userStore,
    orderStore
  }
})
