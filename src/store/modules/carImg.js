import {getCarImg} from '@/service/index'
const state = {
    serDate:[]
}
const mutations={
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
    async getCarImg ({commit},payload) {
        console.log(payload)
        let res = await getCarImg(payload)
        console.log(res)
        commit("setCarImg",res.data)
    }
}
export default({
    namespaced:true,
      state,
      mutations,
      actions,
    })