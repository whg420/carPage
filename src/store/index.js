/*
 * @Author: your name
 * @Date: 2019-12-09 19:57:20
 * @LastEditTime: 2019-12-12 18:37:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \car\carPage\src\store\index.js
 */
import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from "vuex/dist/logger"
//引入子模块
import home from './modules/home'
import details from "./modules/details"
import carImg from "./modules/carImg"
import Inquiry from "./modules/Inquiry"
import Bscroll from "./modules/Bscroll"
import Swiper from "./modules/Swiper"
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    home,
    details,
    carImg,
    Inquiry,
    Bscroll,
    Swiper
  },
  plugins: [createLogger()]
})
