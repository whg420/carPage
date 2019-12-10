/*
 * @Author: your name
 * @Date: 2019-12-10 16:23:46
 * @LastEditTime: 2019-12-10 17:01:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \carPage\src\store\modules\Bscroll.js
 */
import {betterActionList} from '../../service/module/Bscroll'
const state = {
    // 列表数据
    betterList:[]
}
const mutations={
    betterMutationsList(state,payload){
     state.betterList=payload;
     }
}
const actions={
    // 请求betterscroll异步方法
    async betterActionList ({commit},payload) {
        /**
         * @description:接收参数传入 ../../service/module/Bscroll
         * @param {type} payload
         * @return: ../../view/Bscroll
         */
        let res = await betterActionList(payload)
        // 传到同步方法中
        commit("betterActionList",res)
    }
}
export default({
    namespaced:true,
      state,
      mutations,
      actions,
    })