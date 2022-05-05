/*
 * @Author: your name
 * @Date: 2019-12-10 16:24:11
 * @LastEditTime: 2019-12-12 19:00:23
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \car\carPage\src\service\module\Bscroll.js
 */
import request from '../../utils/request'
export let betterActionList = (arr) => {
    let SerialID=arr.SerialID;
    let ImageID=arr.ImageID;
    let Page=arr.Page;
    let PageSize=arr.PageSize;
    console.log(SerialID,ImageID,Page,PageSize , '---------SerialID,ImageID,Page,PageSize -----------');
    return request('/v2-car-getCategoryImageList.html', { params: { SerialID,ImageID,Page,PageSize } })
}