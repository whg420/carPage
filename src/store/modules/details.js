import {getCarList}  from '@/services/index'
const state={
   carList:[],
   nav:[],
   datlist:[],
   current:"全部"
   
}
const mutations={
    setCarList(state,payload){
        state.carList = payload      
        let newdata=payload.list.map((item,index)=>{
            return item.market_attribute.year
        }) 
        state.datlist=payload.list
        state.nav=['全部',...new Set(newdata)]
        console.log(state.current)
        if(state.current=="全部"){
            state.datlist = payload.list
        }else if(state.current){
            console.log(state.current)
            state.datlist=payload.list.filter(item=>item.market_attribute.year==state.current)
        }
       
       
    },
    setCurrent(state,payload){
        console.log(payload)
        state.current=payload
    }
}
const actions={
    async getCarList({commit},payload){
        console.log(payload)
        let res =await getCarList(payload)
        console.log(res)
        commit("setCarList",res.data)                 
     }
}
export default({
    namespaced:true,
      state,
      mutations,
      actions,
    })