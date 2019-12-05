import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const state= {
   homeStateList:[]
}
const mutations= {
    homeMutationsList(state,payload){
      console.log(payload)
        state.homeStateList=payload
      }
}
const actions={
homeActionsList({state,commit}){
    axios.get("https://baojia.chelun.com/v2-car-getMasterBrandList.html").then(response => {
        let list = response.data.data;
       commit('homeMutationsList', list)
      }).catch(error => {
        // handle error
        console.log(error);
      }).then(() => {
        // always executed
      });
}
}
export default new Vuex.Store({
    state,
    mutations,
    actions,
  })