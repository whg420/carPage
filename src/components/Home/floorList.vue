<!--
 * @Author: your name
 * @Date: 2019-12-10 18:10:49
 * @LastEditTime: 2019-12-10 19:26:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \carPage\src\components\Home\floorList.vue
 -->
<template>
  <div>
    <section class="floor-item"
      v-for="(item,index) in floorList" :key="index"
      @click="alertLeft(index)"
    >
      <!-- 左侧列表 -->
      <div class="floor-item-box">
        <li class="col" v-if="item instanceof Object==false">{{item}}</li>
        <ul v-if="item instanceof Object">
          <img :src="item.CoverPhoto" v-if="item.CoverPhoto" />
          <li v-if="item.Name">{{item.Name}}</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
import { log } from 'util';
export default {
  props: ["floorList"],
  data() {
    return {
    };
  },
computed: {
    ...mapState({
      value1: state => state.home.value1
    })
  },
  methods: {
    ...mapMutations({
changeValue1:"home/changeValue1"
    }),
    ...mapActions({
      alertActionsList: "home/alertActionsList"
    }),
    /**
     * 点击弹出
     * @params flag 控制flag变量
     */
    alertLeft(index) {
      this.alertActionsList(this.floorList[index].MasterID);
      this.MasterID = this.floorList[index].MasterID;
      this.changeValue1(true)
    }
  }
};
</script>

<style lang="scss" scoped>
.floor-item-box {
  width: 100%;
}
.floor-item-box > ul {
  width: 92%;
  height: 3.1875rem;
  display: flex;
  align-items: center;
  margin: 0 auto;
  border-bottom: 0.0625rem #ccc solid;
}
.floor-item-box > ul > img {
  width: 2.5625rem;
  height: 2.5625rem;
}
.floor-item-box > ul > li {
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 1.25rem;
  font-size: 1.03125rem;
}
.floor-item {
  width: 100%;
  margin: 0 auto;
  color: #fff;
  display: flex;
}
</style>