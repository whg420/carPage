/*
 * @Author: your name
 * @Date: 2019-12-10 16:23:46
 * @LastEditTime: 2019-12-12 19:28:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \carPage\src\store\modules\Bscroll.js
 */
import { betterActionList } from '../../service/module/Bscroll'
const state = {
    // 列表数据
    betterList: []
}
const mutations = {
    betterMutationsList(state, payload) {
        
        let list=payload.List.map(item=>{
            return item.Url.replace('{0}', 3)
        })
        state.betterList = list
        // console.log(JSON.parse(JSON.stringify(list)));
        
    }
}
const actions = {
    // 请求betterscroll异步方法
    async betterActionList({ commit }, payload) {
        /**
         * @description:接收参数传入 ../../service/module/Bscroll
         * @param {type} payload
         * @return: ../../view/Bscroll
         */
        let res = await betterActionList(payload)
        // 传到同步方法中
        commit("betterMutationsList", res)
    }
}
export default ({
    namespaced: true,
    state,
    mutations,
    actions,
})