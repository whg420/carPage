/*
 * @Author: your name
 * @Date: 2019-12-13 16:00:02
 * @LastEditTime: 2019-12-13 16:36:14
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue11.29\app\src\service\module\carImg.js
 */
import request from '../../utils/request'
export let getCarImg = (params)=>{
    return request("/v2-car-getImageList.html", {params})
}
