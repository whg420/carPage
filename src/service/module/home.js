import request from "../../utils/request"
// 抛出homeActionsList
export let homeActionsList=()=>{
    // 请求首页数据
    return request("v2-car-getMasterBrandList.html")
}
export let alertActionsList=(MasterID)=>{
    // 弹框列表数据
    return request("/v2-car-getMakeListByMasterBrandId.html",{params:{MasterID}})
}
// // 详情页数据
// export let detaileActionsList=(SerialID)=>{
//     return request("v2-car-getInfoAndListById.html",{params:{SerialID}})
// }