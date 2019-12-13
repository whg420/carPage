/*
 * @Author: your name
 * @Date: 2019-12-12 16:35:44
 * @LastEditTime: 2019-12-12 20:39:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue11.29\src\store\modules\CarColor.js
 */
import {getCarColor} from '@/service/index'
const state={
    navlist:[],
    list:[]
}
const mutations={
    setCarColor(state,payload){
        console.log(payload)
        state.navlist=Object.keys(payload)
        state.list=Object.values(payload)
    }
}
const actions={
   async getCarColor  ({commit},payload) {
     console.log(payload)
     let res=await getCarColor(payload)
     console.log(res)
     commit("setCarColor",res)
   }
}
export default({
    namespaced:true,
    state,
    mutations,
    actions,
})