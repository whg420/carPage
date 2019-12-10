
import {InquiryActionList} from '../../service/module/Inquiry'
const state = {
    InquiryList:[]
}
const mutations={
    InquiryMutationsList(state,payload){
       state.InquiryList=payload;
     }
}
const actions={
    async InquiryActionList ({commit},payload) {
        let res = await InquiryActionList(payload)
        console.log(payload,'0-0-0-0-0-0-0-0-0-0-0-0-0-');
        commit("InquiryMutationsList",res)
    }
}
export default({
    namespaced:true,
      state,
      mutations,
      actions,
    })