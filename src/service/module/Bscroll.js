import request from '../../utils/request'
export let betterActionList = (SerialID)=>{
    return request('v2-car-getCategoryImageList.html',{params:{SerialID,ImageID,Page,PageSize}})
}
