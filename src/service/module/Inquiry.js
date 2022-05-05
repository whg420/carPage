/*
 * @Author: your name
 * @Date: 2019-12-10 19:32:06
 * @LastEditTime: 2019-12-12 16:45:08
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \car\carPage\src\service\module\Inquiry.js
 */

import request from '../../utils/request'
export let InquiryActionList = (carId, cityId) => {
    console.log(carId, cityId, '---------carId,cityId-----------');

    return request(`/v2-dealer-alllist.html?carId=${carId}&cityId=${cityId}`)
}
