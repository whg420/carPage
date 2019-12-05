<template>
  <div class="floor">
    <!-- 父传子将flag变量和ID传到弹框组件中 -->
    <Alert :value1="value1" :arList="arList" />
    <!-- {{floorNavList}} -->
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
    <!-- {{floorList}} -->
    <section
      class="floor-item"
      v-for="(item,index) in floorList"
      :key="index"
      @click="alertLeft(index)"
    >
      <!-- 左侧列表 -->
      <div class="floor-item-box">
        <li class="col" v-if="item instanceof Object==false">{{item}}</li>
        <ul v-if="item instanceof Object">
          <img :src="item.CoverPhoto"  v-if="item.CoverPhoto" />
          <li v-if="item.Name">{{item.Name}}</li>
        </ul>
      </div>
    </section>
  </div>
</template>
 
<script>
/**
 * Alert axios
 * @params 引入Alert  className 引入引入Alert,axios
 */
import axios from "axios";
import Alert from "../components/Alert";
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
import { log } from "util";
export default {
  name: "home",
  data() {
    return {
      //floorNav: [],
      //floorList: [],
      floorIndex: 1,
      value1: false
      //arList: []
    };
  },
  /**
   * 注册组件
   * @params Alert 注册组件
   */
  components: {
    Alert
  },
  computed: {
    ...mapState({
      homeStateList: state => state.home.homeStateList,
      floorList: state => state.home.floorList,
      floorNav: state => state.home.floorNav,
      arList: state => state.home.arList
    })
  },
  /**
   * 在初始的时候请求数据
   * @params axios 请求数据
   */
  created() {
    this.homeActionsList();
  },
  methods: {
    ...mapActions({
      homeActionsList: "home/homeActionsList",
      alertActionsList: "home/alertActionsList"
    }),
    /**
     * 点击弹出
     * @params flag 控制flag变量
     */
    alertLeft(index) {
      this.alertActionsList(this.floorList[index].MasterID);
      console.log(this.floorList[index].MasterID)
      this.value1 = true;
      // axios
      //  .get(
      //   `https://baojia.chelun.com/v2-car-getMakeListByMasterBrandId.html?MasterID=${this.floorList[index].MasterID}`
      // )
      //.then(response => {
      //  this.arList = response.data.data;
      // console.log(JSON.parse(JSON.stringify(this.arList)));
      //})
      // .catch(error => {
      // handle error
      //  console.log(error);
      // })
      //.then(() => {
      // always executed
      //});
    },
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
  }
};
</script>
<style scoped>
<<<<<<< HEAD
.floor {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
=======
 .floor{
    width: 100%;
    height: 100%;
    overflow-y: scroll
  }
>>>>>>> 2d4599281a2e9d571e48f83d40923960eabc7909
.col {
  width: 23.37rem;
  height: 1.3125rem;
  color: #b5b5b5;
  background: #f4f4f4;
  border-bottom: none;
<<<<<<< HEAD
  font-size: 0.9375rem;
  padding-left: 1rem;
  display: flex;
  align-items: center;
=======
   font-size:0.9375rem;
   padding-left: 1rem;
>>>>>>> 2d4599281a2e9d571e48f83d40923960eabc7909
}
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
<<<<<<< HEAD
  font-size: 0.75rem;
  margin-bottom: 0.4rem;
=======
 font-size: 0.75rem;
>>>>>>> 2d4599281a2e9d571e48f83d40923960eabc7909
}
.floor-nav .nav-list .nav-list-item.active,
.floor-nav .nav-list .nav-list-item:hover {
  background-color: #404040;
}
<<<<<<< HEAD
.floor-item-box {
=======
.floor-item-box{
>>>>>>> 2d4599281a2e9d571e48f83d40923960eabc7909
  width: 100%;
}
.floor-item-box > ul {
  width: 92%;
  height: 3.1875rem;
  display: flex;
  align-items: center;
  margin: 0 auto;
<<<<<<< HEAD
  border-bottom: 0.0625rem #ccc solid;
=======
  border-bottom: 1px #ccc solid;

>>>>>>> 2d4599281a2e9d571e48f83d40923960eabc7909
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
 