/*
 * @Author: your name
 * @Date: 2019-12-10 19:32:06
 * @LastEditTime: 2019-12-10 19:51:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \carPage\src\service\module\Inquiry.js
 */
import request from '../../utils/request'
export let InquiryActionList = (carId,cityId)=>{
    console.log(carId,cityId,'---------carId,cityId-----------');

    return request(`/v2-dealer-alllist.html?carId=${carId}&cityId=${cityId}`)
}
