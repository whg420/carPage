/*
 * @Author: your name
 * @Date: 2019-12-09 20:38:22
 * @LastEditTime: 2019-12-12 19:17:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \carPage\src\store\modules\carImg.js
 */
import { getCarImg } from '@/service/index'
const state = {
  serDate: []
}
const mutations = {
  setCarImg(state, payload) {
    state.serDate = payload.map(item => {
      item.List = item.List.map(ite => {
        /**
         * @description: 图片处理将{0}替换成数字
         * @param {type} Url
         */
        ite.Url = ite.Url.replace('{0}', 3)
        return ite
      })
      return item
    })
  }
}
const actions = {
  async getCarImg({ commit }, payload) {
    let res = await getCarImg(payload)
    commit("setCarImg", res)
  }
}
export default ({
  namespaced: true,
  state,
  mutations,
  actions,
})