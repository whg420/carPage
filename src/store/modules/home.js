import { getMasterAllList,getdrawerList} from '@/services/index'


const state= {
  allList:[],
  deamerList: []
}
const mutations= {
    setAllList(state,payload){
        state.allList = payload   
    },
    setdrawerList(state, data) {
        state.deamerList = data
    }
}
const actions={
  async getMasterAllList ({commit},payload) {
    let res=await getMasterAllList()
    console.log(res)
     commit("setAllList",res.data)
  },
  async getdrawerList({commit},payload){
    let res =await getdrawerList(payload)
    console.log(res)
    commit("setdrawerList",res.data)
 }
}
export default({
  namespaced:true,
    state,
    mutations,
    actions,
  })