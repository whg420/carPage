/*
 * @Author: your name
 * @Date: 2019-12-12 16:44:54
 * @LastEditTime: 2019-12-12 18:54:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \car\carPage\src\store\modules\Swiper.js
 */

import { SwiperActionList } from '../../service/module/Swiper'
const state = {
    SwiperList: []
}
const mutations = {
    SwiperMutationsList(state, payload) {
        state.SwiperList = payload;
        console.log(payload,'----------------------------');
        
    }
}
const actions = {
    async SwiperActionList({ commit }, payload) {
        let res = await SwiperActionList(payload)
        commit("SwiperMutationsList", res)
    }
}
export default ({
    namespaced: true,
    state,
    mutations,
    actions,
})