import { detaileActionsList, alertActionsList } from "../../service/index"
const state = {
  // 页面所有数据 
  detaileStateList: [],
  list: [],
  datalist: [],
  yearArr: []
}
const mutations = {
  // 首页同步方法
  detaileMutationsList(state, payload) {
    // 页面所有数据 
    state.detaileStateList = payload;
    let arr = [];
    payload.data.data.list.forEach((item, index) => {
      arr.push(item.market_attribute.year);
      state.yearArr = ['全部', ...new Set(arr)];
    });
    state.list = JSON.parse(JSON.stringify(payload.data.data))
    state.datalist = JSON.parse(JSON.stringify(payload.data.data.list))
  }
}
const actions = {
  // 请求过来的页面初始数据
  async detaileActionsList({ commit }) {
    let res = await detaileActionsList()
    // commit(同步方法,请求到的数据)
    commit("detaileMutationsList", res)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
