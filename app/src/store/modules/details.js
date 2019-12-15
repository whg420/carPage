import {getCarList}  from '../../service/index'
const state={
   carList:[],
   nav:[],
   datlist:[],
   current:"全部",
   carNav:[]
}
const mutations={
    setCarList(state,payload){
        state.carList = payload 
        let newdata=payload.list.map((item,index)=>{
            return item.market_attribute.year
        }) 
        state.datlist=payload.list
        state.nav=['全部',...new Set(newdata)]
        state.carNav=[...new Set(newdata)]
        if(state.current=="全部"){
            state.datlist = payload.list
        }else if(state.current){
            state.datlist=payload.list.filter(item=>item.market_attribute.year==state.current)
        }
        console.log(state.datlist[0],'--------------state');
       
    },
    setCurrent(state,payload){
        state.current=payload
    }
}
const actions={
    async getCarList({commit},payload){
        let res =await getCarList(payload)
        console.log(res)
        commit("setCarList",res)                 
     }
}
export default({
    namespaced:true,
      state,
      mutations,
      actions,
    })