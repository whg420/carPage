import request from '@/utils/request'
export let getCarImg = (SerialID)=>{
    return request(`/v2-car-getImageList.html?SerialID=${SerialID}`)
}
