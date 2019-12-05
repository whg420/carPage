import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from "vuex/dist/logger"
//引入子模块
import home from './modules/home'
import detaile from './modules/detaile'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    home,
    detaile
  },
  plugins:[createLogger()]
})