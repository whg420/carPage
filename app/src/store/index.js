/*
 * @Author: your name
 * @Date: 2019-12-09 20:12:34
 * @LastEditTime: 2019-12-12 16:47:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue11.29\src\store\index.js
 */
import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from "vuex/dist/logger"
//引入子模块
import home from './modules/home'
import details from "./modules/details"
import carImg from "./modules/carImg"
import CarColor from "./modules/CarColor"//全部颜色
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    home,
    details,
    carImg,
    CarColor
  },
  plugins:[createLogger()]
})
