<!--
 * @Author: your name
 * @Date: 2019-12-10 15:31:08
 * @LastEditTime: 2019-12-12 21:43:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \car\carPage\src\views\BScroll.vue
 -->
<!-- better_Scroll-demo -->
<template>
  <div class="page_wraper" ref="wrap">
    <div class="content">
      <div class="top_tip tc">{{ pullDownMsg }}</div>
      <BScrollList :betterList="betterList" />
      <div class="bottom_tip tc">{{ pullUpMsg }}</div>
    </div>
  </div>
</template>

<script>
/**
 * @description: 引入better-scroll
 * @param {type} BScroll
 * @return: npm下载
 */
import BScroll from "better-scroll";
/**
 * @description: betterscroll的数据组件
 * @param {type} BScrollList
 * @return: ../components/Bscroll/List
 */
import BScrollList from "../components/Bscroll/List";
/**
 * @description: 引入setTimeout
 * @param {type} setTimeout
 * @return: timers
 */
import { setTimeout } from "timers";
/**
 * @description: 引入mapState, mapMutations, mapGetters, mapActions
 * @param {type} mapState, mapMutations, mapGetters, mapActions
 * @return: vuex
 */
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      startNum: 1,
      list: [],
      pullDownMsg: "下拉刷新，发现更多",
      pullUpMsg: "加载中，请稍后...",
      noMsg: "没有更多了",
      bsScroll: "",
      arr: {
        SerialID: 2593,
        ImageID: 11,
        Page: 1,
        PageSize: 30
      }
    };
  },

  components: {
    BScrollList
  },

  computed: {
    ...mapState({
      betterList: store => store.Bscroll.betterList
    })
  },

  mounted: function() {
    /**
     * @description: 初始化
     * @param {type}  probeType,click
     * @return: better-scroll
     */

    this.bsScroll = new BScroll(this.$refs.wrap, {
      probeType: 1,
      click: true
    });
    /**
     * @description: 监听滚动-->scroll事件
     * @param {type} pullDownMsg和on事件监听器(事件event，回调函数)
     */
    this.bsScroll.on("scroll", pos => {
      //   监听下拉
      /**
       * @description:判断pos的y值下拉距离pos,改变pullDownMsg参数
       *                pos----> {x: 0, y: 0}
       * @param {type} pos.y
       */
      if (pos.y > 0 && pos.y <= 40) {
        this.pullDownMsg = "下拉刷新，发现更多";
      } else if (pos.y > 40) {
        this.pullDownMsg = "释放更新，发现更多";
        //   if (JSON.parse(JSON.stringify(this.betterList))==[]) {
        //   this.arr.Page = 1;
        //   console.log(this.arr.Page,'-------------------------------------------------------');
        // }
        this.arr.Page++;
        this.arr.PageSize=30;
        this.betterActionList(this.arr);
      }
      // console.log("下拉");
    });
    /**
     * @description: 监听滚动结束,监听手指离开
     * @param {type} touchEnd
     * @return:
     */
    this.bsScroll.on("touchEnd", pos => {
      //   监听上拉
      // console.log("上拉");
      if (pos.y > 40) {
        console.log("上拉----重新获取数据");
        // 重新获取数据
        this.pullDownMsg = "下拉刷新，发现更多";
      } else if (pos.y < this.bsScroll.maxScrollY - 30) {
        console.log("下拉加载");
this.arr.PageSize=this.arr.PageSize+30;
        this.betterActionList(this.arr);
        // 下拉加载
        this.bsScroll.refresh();
      }
    });
  },

  methods: {
    ...mapActions({
      betterActionList: "Bscroll/betterActionList"
    })
  },
  created() {
    console.log(this.arr.Page, "-------------------------");

    this.betterActionList(this.arr);
  }
};
</script>

<style lang='scss' scoped>
.page_wraper {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #eee;
}
.content {
  position: relative;
  min-height: 100%;
}
// 顶部提示盒子
.top_tip {
  position: absolute;
  top: -2.1875rem;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
// 底部提示盒子
.bottom_tip {
  position: absolute;
  bottom: -2.1875rem;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>