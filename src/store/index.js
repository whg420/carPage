import Vue from 'vue'
import Vuex from 'vuex'
import Home from '../store/modules/home'
import detaile from '../store/modules/detaile'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Home,
    detaile
  }
})
