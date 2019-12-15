/*
 * @Author: your name
 * @Date: 2019-12-13 16:00:02
 * @LastEditTime: 2019-12-13 17:15:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue11.29\app\src\store\modules\carImg.js
 */
import {getCarImg} from '@/service/index'
const state = {
    serDate:[],
    ColorID:""
}
const mutations={
  setColorID(state,payload){
    state.ColorID=payload
  },
     setCarImg(state,payload){
        console.log(payload)
         state.serDate = payload.map(item => {
            item.List = item.List.map(ite => {
              ite.Url = ite.Url.replace('{0}', 3)
              return ite
           
            })
            return item
          })
     }
}
const actions={
    async getCarImg ({commit,state},payload) {
      let params={SerialID:payload}
        
        if(state.ColorID){
          console.log(params)
          params.ColorID=state.ColorID
        }
        let res = await getCarImg(params)
        console.log(res)
        commit("setCarImg",res)
    }
}
export default({
    namespaced:true,
      state,
      mutations,
      actions,
    })