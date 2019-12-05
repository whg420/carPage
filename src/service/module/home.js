import request from "../../utils/request"
// 抛出homeActionsList
export let homeActionsList=()=>{
    // 请求首页数据
    return request("v2-car-getMasterBrandList.html")
}
export let alertActionsList=(MasterID)=>{
    console.log(MasterID);
    
    return request("/v2-car-getMakeListByMasterBrandId.html",{params:{MasterID}})
}
