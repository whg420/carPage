import {getCarList}  from '@/services/index'
const state={
   carList:[],
   nav:[],
   datalist:[],
   
}
const mutations={
    setCarList(state,payload){
        state.carList = payload   
        console.log(payload)
        let newdata=payload.list.map((item,index)=>{
            return item.market_attribute.year
        }) 
        state.datalist=payload.list
        state.nav=['全部',...new Set(newdata)]
    },
}
const actions={
    async getCarList({commit},payload){
        console.log(payload)
        let res =await getCarList(payload)
        console.log(res)
        commit("setCarList",res.data)
            // let list=JSON.parse(JSON.stringify(res.data.data))
            // state.datalist=JSON.parse(JSON.stringify(res.data.data.list))
            // let newdata=this.datalist.map((item,index)=>{
            //     return item.market_attribute.year
            // })         
            
         
           
           
     }
}
export default({
    namespaced:true,
      state,
      mutations,
      actions,
    })