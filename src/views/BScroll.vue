<!-- better_Scroll-demo -->
<template>
  <div class="page_wraper" ref="wrap">
    <div class="content">
      <div class="top_tip tc">{{ pullDownMsg }}</div>
      <BScrollList :list="list" />
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
      list: [
        {
          Url:
            "http://img1.bitautoimg.com/autoalbum/files/20180212/984/20180212151204124212184_5849856_1.jpg",
          HighSize: 8,
          LowSize: 3
        },
        {
          Url:
            "http://img2.bitautoimg.com/autoalbum/files/20180212/500/20180212151155115555180_5849857_1.jpg",
          HighSize: 8,
          LowSize: 3
        },
        {
          Url:
            "http://img3.bitautoimg.com/autoalbum/files/20180212/906/201802121511451145159178_5849858_1.jpg",
          HighSize: 8,
          LowSize: 3
        },
        {
          Url:
            "http://img4.bitautoimg.com/autoalbum/files/20180212/827/2018021215113811384087_5849859_1.jpg",
          HighSize: 8,
          LowSize: 3
        },
        {
          Url:
            "http://img1.bitautoimg.com/autoalbum/files/20180212/187/201802121511421142211400_5849860_1.jpg",
          HighSize: 8,
          LowSize: 3
        },
        {
          Url:
            "http://img2.bitautoimg.com/autoalbum/files/20180212/468/2018021215114411441074_5849861_1.jpg",
          HighSize: 8,
          LowSize: 3
        },
        {
          Url:
            "http://img3.bitautoimg.com/autoalbum/files/20180212/343/20180212151142114217486_5849862_1.jpg",
          HighSize: 8,
          LowSize: 3
        },
        {
          Url:
            "http://img4.bitautoimg.com/autoalbum/files/20180212/874/201802121511331133150180_5849863_1.jpg",
          HighSize: 8,
          LowSize: 3
        },
        {
          Url:
            "http://img1.bitautoimg.com/autoalbum/files/20180212/858/201802121511321132243340_5849864_1.jpg",
          HighSize: 8,
          LowSize: 3
        },
        {
          Url:
            "http://img2.bitautoimg.com/autoalbum/files/20180212/655/201802121511321132151178_5849865_1.jpg",
          HighSize: 8,
          LowSize: 3
        },
        {
          Url:
            "http://img3.bitautoimg.com/autoalbum/files/20180212/233/20180212151127112724663_5849866_1.jpg",
          HighSize: 8,
          LowSize: 3
        },
        {
          Url:
            "http://img4.bitautoimg.com/autoalbum/files/20180212/796/201802121511301130141179_5849867_1.jpg",
          HighSize: 8,
          LowSize: 3
        },
        {
          Url:
            "http://img1.bitautoimg.com/autoalbum/files/20180212/874/2018021215113911397663_5849868_1.jpg",
          HighSize: 8,
          LowSize: 3
        },
        {
          Url:
            "http://img2.bitautoimg.com/autoalbum/files/20180212/374/20180212151126112670340_5849869_1.jpg",
          HighSize: 8,
          LowSize: 3
        },
        {
          Url:
            "http://img3.bitautoimg.com/autoalbum/files/20180212/499/201802121511211121153182_5849870_1.jpg",
          HighSize: 8,
          LowSize: 3
        },
        {
          Url:
            "http://img4.bitautoimg.com/autoalbum/files/20180212/842/201802121511211121237185_5849871_1.jpg",
          HighSize: 8,
          LowSize: 3
        },
        {
          Url:
            "http://img1.bitautoimg.com/autoalbum/files/20180212/545/20180212151115111576175_5849872_1.jpg",
          HighSize: 8,
          LowSize: 3
        },
        {
          Url:
            "http://img2.bitautoimg.com/autoalbum/files/20180212/764/20180212151127112739172_5849873_1.jpg",
          HighSize: 8,
          LowSize: 3
        },
        {
          Url:
            "http://img3.bitautoimg.com/autoalbum/files/20180212/154/20180212151110111097172_5849874_1.jpg",
          HighSize: 8,
          LowSize: 3
        },
        {
          Url:
            "http://img4.bitautoimg.com/autoalbum/files/20180212/326/2018021215110511514585_5849875_1.jpg",
          HighSize: 8,
          LowSize: 3
        },
        {
          Url:
            "http://img1.bitautoimg.com/autoalbum/files/20180212/108/201802121511111111169179_5849876_1.jpg",
          HighSize: 8,
          LowSize: 3
        },
        {
          Url:
            "http://img2.bitautoimg.com/autoalbum/files/20180212/764/20180212151059105929182_5849877_1.jpg",
          HighSize: 8,
          LowSize: 3
        },
        {
          Url:
            "http://img3.bitautoimg.com/autoalbum/files/20180212/639/20180212151104114167340_5849878_1.jpg",
          HighSize: 8,
          LowSize: 3
        },
        {
          Url:
            "http://img4.bitautoimg.com/autoalbum/files/20180212/905/201802121511191119169172_5849879_1.jpg",
          HighSize: 8,
          LowSize: 3
        },
        {
          Url:
            "http://img1.bitautoimg.com/autoalbum/files/20180212/420/201802121510531053190185_5849880_1.jpg",
          HighSize: 8,
          LowSize: 3
        },
        {
          Url:
            "http://img2.bitautoimg.com/autoalbum/files/20180212/123/20180212151100110138400_5849881_1.jpg",
          HighSize: 8,
          LowSize: 3
        },
        {
          Url:
            "http://img3.bitautoimg.com/autoalbum/files/20180212/732/20180212151053105325085_5849882_1.jpg",
          HighSize: 8,
          LowSize: 3
        },
        {
          Url:
            "http://img4.bitautoimg.com/autoalbum/files/20180212/686/201802121511151115238400_5849883_1.jpg",
          HighSize: 8,
          LowSize: 3
        },
        {
          Url:
            "http://img1.bitautoimg.com/autoalbum/files/20180212/904/2018021215104510459174_5849884_1.jpg",
          HighSize: 8,
          LowSize: 3
        },
        {
          Url:
            "http://img2.bitautoimg.com/autoalbum/files/20180212/872/201802121510411041160178_5849885_1.jpg",
          HighSize: 8,
          LowSize: 3
        }
      ],
      pullDownMsg: "下拉刷新，发现更多",
      pullUpMsg: "加载中，请稍后...",
      noMsg: "没有更多了",
      bsScroll: ""
    };
  },

  components: {
    BScrollList
  },

  computed: {},

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
      console.log("下拉");
      console.log(pos);
      /**
       * @description:判断pos的y值下拉距离pos,改变pullDownMsg参数
       *                pos----> {x: 0, y: 0}
       * @param {type} pos.y
       */
      if (pos.y > 0 && pos.y <= 40) {
        this.pullDownMsg = "下拉刷新，发现更多";
      } else if (pos.y > 40) {
        this.pullDownMsg = "释放更新，发现更多";
      }
    });
    /**
     * @description: 监听滚动结束,监听手指离开
     * @param {type} touchEnd
     * @return: 
     */
    this.bsScroll.on("touchEnd", pos => {
      //   监听上拉
      console.log("上拉");
      if (pos.y > 40) {
        console.log("上拉----重新获取数据");
        // 重新获取数据
        this.pullDownMsg = "下拉刷新，发现更多";
      } else if (pos.y < this.bsScroll.maxScrollY - 30) {
        console.log("下拉加载");
        // 下拉加载
        this.bsScroll.refresh();
      }
    });
  },

  methods: {}
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
  justify-content:center;
  align-items: center;
}
// 底部提示盒子
.bottom_tip {
  position: absolute;
  bottom: -2.1875rem;
  left: 0;
  width: 100%;
  display: flex;
  justify-content:center;
  align-items: center;
}
</style>