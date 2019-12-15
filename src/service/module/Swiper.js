/*
 * @Author: your name
 * @Date: 2019-12-12 16:44:44
 * @LastEditTime: 2019-12-12 18:49:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \car\carPage\src\service\module\Swiper.js
 */
import request from '../../utils/request'
export let SwiperActionList = (arr) => {
    let SerialID=arr.SerialID;
    let ImageID=arr.ImageID;
    let Page=arr.Page;
    let PageSize=arr.PageSize;
    console.log(SerialID,ImageID,Page,PageSize , '---------SerialID,ImageID,Page,PageSize -----------');
    return request('/v2-car-getCategoryImageList.html', { params: { SerialID,ImageID,Page,PageSize } })
}