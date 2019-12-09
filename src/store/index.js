import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from "vuex/dist/logger"
//引入子模块
import home from './modules/home'
import details from "./modules/details"
import carImg from "./modules/carImg"
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    home,
    details,
    carImg
  },
  plugins:[createLogger()]
})
