
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
          @click="setFloorNavMountClick(index)"
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
          <img :src="item.CoverPhoto" v-if="item.CoverPhoto" />
          <li v-if="item.Name">{{item.Name}}</li>
        </ul>
      </div>
    </section>
  </div>
</template>
 
<script>
/**
 * axios
 * @params 引入axios
 */
import axios from "axios";
/**
 * Alert
 * @params 引入Alert className
 */
import Alert from "../components/Alert";
var TIMER = null;
export default {
  name: "home",
  data() {
    return {
      floorNav: [],
      floorList: [],
      floorIndex: 1,
      value1: false,
      arList: []
    };
  },
  /**
   * 注册组件
   * @params Alert 注册组件
   */
  components: {
    Alert
  },
  /**
   * 在初始的时候请求数据
   * @params axios 请求数据
   */
  created() {
    axios
      .get("https://baojia.chelun.com/v2-car-getMasterBrandList.html")
      .then(response => {
        let list = response.data.data;
        // 将请求的数据赋给左侧列表
        this.floorList = list;
        let res = [];
        list.forEach((item, index) => {
          let text = item.Spelling.slice(0, 1);
          res.push(text, item);
          this.floorList = Array.from(new Set(res));
          // console.log(this.floorList);
        });
        // 定义一个数组，循环这个数据，将它的Spelling的第一位取出来，存入数组，newSet去重
        let arr = [];
        list.forEach((item, index) => {
          let text = item.Spelling;
          arr.push(text.slice(0, 1));
          this.floorNav = Array.from(new Set(arr));
        });
      })
      .catch(error => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
  },
  methods: {
    /**
     * 点击弹出
     * @params flag 控制flag变量
     */
    alertLeft(index) {
      this.value1 = true;
      axios
        .get(
          `https://baojia.chelun.com/v2-car-getMakeListByMasterBrandId.html?MasterID=${this.floorList[index].MasterID}`
        )
        .then(response => {
          this.arList = response.data.data;
          console.log(this.arList);

          // console.log(JSON.parse(JSON.stringify(this.arList)));
        })
        .catch(error => {
          // handle error
          console.log(error);
        })
        .then(() => {
          // always executed
        });
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
      document.querySelector('.floor').scrollTop=floor_top
       window.onscroll = () =>{
      let top = document.querySelector('.floor').scrollTop;
          top = floor_top 
      }
      //检测是否有滚动条
if(document.body.style.overflow!="hidden"&&document.body.scroll!="no"&&document.body.scrollHeight>document.body.offsetHeight)
{
console.log('有滚动条')
}else
{
console.log('无滚动条')
}
    }
}
}
</script>
<style scoped>
  .floor{
    width: 100%;
    height: 100%;
    overflow-y: scroll
  }
.col {
  width: 375px;
  color: #000;
  background: #f4f4f4;
  margin-left: -10px;
  border-bottom: none;
}
.setaxios {
  width: 100%;
  margin: 20px auto;
  text-align: right;
}
.setaxios input[type="button"] {
  text-align: center;
}
.floor-nav {
  position: fixed;
  top: 15%;
  right: 0;
}
.floor-nav .nav-list {
  width: 50px;
  display: inline-block;
  text-align: center;
  /* background-color: #f8f8f8; */
}
.floor-nav .nav-list .nav-list-item {
  display: inline-block;
  width: 100%;
  border-bottom: 1px solid #fff;
  cursor: pointer;
  /* font-size: 25px; */
}
.floor-nav .nav-list .nav-list-item.active,
.floor-nav .nav-list .nav-list-item:hover {
  background-color: #404040;
}
.floor-item-box > ul {
  width: 100%;
  display: flex;
}
.floor-item-box > ul > img {
  width: 40px;
  height: 40px;
}
.floor-item-box > ul > li {
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
}
.floor-item {
  width: 95%;
  border-bottom: 1px #ccc solid;
  margin: 0 auto;
  color: #fff;
  display: flex;
}
</style>
 