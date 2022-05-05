/*
 * @Author: your name
 * @Date: 2019-12-09 19:57:20
 * @LastEditTime: 2019-12-12 16:27:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \carPage\src\store\modules\home.js
 */
import { homeActionsList, alertActionsList } from "../../service/index"
const state = {
  // 页面所有数据 
  homeStateList: [],
  // 页面数据
  floorList: [],
  // 右侧数据
  floorNav: [],
  arList: [],
  // 控制变量
  value1: false

}
const mutations = {
  changeValue1(state, payload) {
    state.value1 = payload
  },
  // 首页同步方法
  homeMutationsList(state, payload) {
    // 页面所有数据 
    state.homeStateList = payload;
    // 页面数据
    let res = [];
    payload.forEach((item, index) => {
      res.push(item.Spelling.slice(0, 1), item);
      state.floorList = Array.from(new Set(res));
    })
    // 右侧数据
    let arr = [];
    payload.forEach((item, index) => {
      arr.push(item.Spelling.slice(0, 1));
      state.floorNav = Array.from(new Set(arr));
    });
  },
  // 弹框同步方法
  alertMutationsList(state, payload) {
    state.arList = payload
  }
}
const actions = {
  // 请求过来的页面初始数据
  async homeActionsList({ commit }) {
    let res = await homeActionsList()
    // commit(同步方法,请求到的数据)
    commit("homeMutationsList", res)
  },
  // 请求的弹框数据
  async alertActionsList({ commit }, payload) {
    let res = await alertActionsList(payload)
    // commit(同步方法,请求到的数据)
    commit("alertMutationsList", res)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
