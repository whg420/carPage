import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from "vuex/dist/logger"
//引入子模块
import home from './modules/home'
<<<<<<< HEAD
import detaile from './modules/detaile'
=======
import details from './modules/details'
>>>>>>> e2b7cbaf0941b427ad6ac7955d0efb1eb5decc8d
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    home,
<<<<<<< HEAD
    detaile
=======
    details
>>>>>>> e2b7cbaf0941b427ad6ac7955d0efb1eb5decc8d
  },
  plugins:[createLogger()]
})
