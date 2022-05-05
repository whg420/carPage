<!--
 * @Author: your name
 * @Date: 2019-12-10 16:16:32
 * @LastEditTime: 2019-12-12 19:28:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \car\carPage\src\components\Bscroll\List.vue
 -->
<template>
  <div>
    <ul>
      <li v-for="(item,index) in betterList" :key="index">
        <img :src="item" alt />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["betterList"]
};
</script>

<style lang="scss" scoped>
ul {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  li {
    width: 33%;
    display: flex;
    margin-bottom: 0.35rem;
    img {
      width: 100%;
      height: 7.6875rem;
    }
  }
}
</style>