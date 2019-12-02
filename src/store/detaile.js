import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      lis:[]
  },
  mutations: {
      setList(state,payload){
        state.lis=payload
      }
  },
  actions: {
    getList({commit}){
      axios.get('https://baojia.chelun.com/v2-car-getInfoAndListById.html?SerialID=2364').then(({data})=>{
        commit('setList',data.data)
  })
    },
  
  },
  modules: {
  }
})
