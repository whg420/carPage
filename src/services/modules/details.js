import request from '@/utils/request'
export let getCarList=(SerialID)=>{
    return request(`/v2-car-getInfoAndListById.html?SerialID=${SerialID}`)
}