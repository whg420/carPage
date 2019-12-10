<!--
 * @Author: your name
 * @Date: 2019-12-10 17:56:30
 * @LastEditTime: 2019-12-10 18:22:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \carPage\src\components\Home\floorNavList.vue
 -->
<template>
   <div>
        <section class="floor-nav" id="floorNavList">
      <!-- 右侧列表 -->
      <ul class="nav-list">
        <!-- 右侧点击 -->
        <li>#</li>
        <li
          class="nav-list-item"
          v-for="(item, index) in floorNav"
          :key="index"
          @touchstart="setFloorNavMountClick(index)"
        >{{item}}</li>
      </ul>
    </section>
   </div>
</template>

<script>
    export default {
        props:["floorNav"],
        methods: {
            /**
     * 设置楼层导航事件驱动方法
     * @params Number index  楼层下标
     */
    setFloorNavMountClick(index) {
      console.log(index, "-----------------------点击的下标");
      let floor_item = document.querySelectorAll(".col");
      console.log(
        floor_item,
        "-----------------------获取到每一个点击对应的节点"
      );
      let floor_top = floor_item[index].offsetTop - floor_item[0].offsetTop;
      console.log(
        floor_top,
        "-----------------------获取到每一个点击对应的节点的offsetTop"
      );
      document.querySelector(".floor").scrollTop = floor_top;
      //监听
      window.onscroll = () => {
        let top = document.querySelector(".floor").scrollTop;
        top = floor_top;
      };
    }
        },
    }
</script>

<style scoped>
.floor-nav {
  position: fixed;
  top: 8.875rem;
  right: 0.5rem;
}
.floor-nav .nav-list {
  display: inline-block;
  text-align: center;
}
.floor-nav .nav-list .nav-list-item {
  cursor: pointer;
  font-size: 0.75rem;
  margin-bottom: 0.4rem;
}
.floor-nav .nav-list .nav-list-item.active,
.floor-nav .nav-list .nav-list-item:hover {
  background-color: #404040;
}
</style>