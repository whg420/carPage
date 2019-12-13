/*
 * @Author: your name
 * @Date: 2019-12-09 19:57:20
 * @LastEditTime: 2019-12-12 16:27:22
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \car\carPage\src\service\module\carImg.js
 */
import request from '../../utils/request'
export let getCarImg = (SerialID) => {
    return request(`/v2-car-getImageList.html?SerialID=${SerialID}`)
}
