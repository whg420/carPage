/*
 * @Author: your name
 * @Date: 2019-12-12 16:31:25
 * @LastEditTime: 2019-12-12 16:34:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue11.29\src\service\module\CarColor.js
 */
import request from '../../utils/request'
export let getCarColor=(SerialID)=>{
    return request(`/v2-car-getModelImageYearColor.html?SerialID=${SerialID}`)
}