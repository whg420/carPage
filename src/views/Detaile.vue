<template>
  <div class="box">
    <!-- 详情页顶部图片 -->
    <div class="navimg">
      <img :src="carList.CoverPhoto" alt @click="tab" />
    </div>
    <!-- 中部询问底价 -->
    <div class="info">
      <div class="info1">
        <p v-if="carList.market_attribute">{{carList.market_attribute.dealer_price}}</p>
        <p v-if="carList.market_attribute">指导价{{carList.market_attribute.official_refer_price}}</p>
      </div>
      <div class="action">
        <button @click="fromInquiry(counts)">询问底价</button>
      </div>
    </div>
<!-- 全部type切换 -->
    <div class="carlist">
      <div class="c-type">
        <span
          :class="count==index?'active':''"
          v-for="(item,index) in nav"
          :key="index"
          @click="alllist(item,index)"
        >{{item}}</span>
      </div>
<!-- type切换的样式 -->
      <div class="conlist" v-for="(item,index) in datalist" :key="index">
        <p class="one">{{item.exhaust_str}}/{{item.max_power_str}}{{item.inhale_type}}</p>
        <ul>
          <li>
            <p>{{item.market_attribute.year}}款{{item.car_name}}</p>
            <p>156马力9档手自一体</p>
            <p>
              <span>指导价{{item.market_attribute.dealer_price_max}}</span>
              <span>{{item.market_attribute.dealer_price_min}}起</span>
            </p>
            <button class="askqustion" @click="fromInquiry(index)">询问底价</button>
          </li>
        </ul>
      </div>
    </div>
    <!-- 底部按钮 -->
    <div class="clone"></div>
    <div class="bottom" @click="fromInquiry(counts)">
      <p>询问底价</p>
      <p>本地经销商问你报价</p>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      SerialID: this.$route.query.ID,
      count: 0,
      counts: 0,
      MasterID: this.$route.query.MasterID
    };
  },
  /**
   * @description: type以上全部数据,全部type切换数据，type切换的数据
   * @param {type} carList,nav,datalist
   * @return: 
   */
  computed: {
    ...mapState({
      carList: store => store.details.carList,
      nav: store => store.details.nav,
      datalist: store => store.details.datlist
    })
  },
  methods: {
    ...mapActions({
      getCarList: "details/getCarList"
    }),
    ...mapMutations({
      setCurrent: "details/setCurrent"
    }),
    /**
     * @description: 点击询问底价按钮，跳转路由
     * @param {type} index
     * @return: 
     */
    fromInquiry(index) {
      let ID = this.SerialID;
      let MasterID = this.MasterID;
      this.$router.push({ path: "/inquiry", query: { ID, index, MasterID } });
    },
    alllist(item,index) {
        this.count=index
      this.setCurrent(item);
      this.getCarList(this.SerialID);
    },

    tab() {
      let ID = this.$route.query.ID;
      this.$router.push({ path: "/colorDesign", query: { ID } });
    }
  },
  created() {
    this.getCarList(this.SerialID);
  }
};
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: auto;
  background: #f4f4f4;
}
.navimg {
  width: 100%;
  height: 10.3125rem;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
    height: 150%;
    position: absolute;
    top: -2.6875rem;
  }
}
.info {
  width: 100%;
  height: 4.6875rem;
  justify-content: space-between;
  display: flex;
  margin-bottom: 0.625rem;
  background: #fff;
  display: flex;
  align-items: center;
  .action {
    button {
      width: 11.75rem;
      height: 2.1875rem;
      text-align: center;
      background: #00afff;
      color: #fff;
      border-radius: 0.3125rem;
      border: none;
      font-size: 1rem;
      margin-right: 0.4375rem;
    }
  }
}
.info1 p:first-child {
  font-size: 1.05rem;
  color: red;
  font-weight: 400;
  padding-left: 0.8125rem;
}
.info1 p:nth-child(2) {
  font-size: 0.8125rem;
  color: silver;
  padding-left: 0.8125rem;
}
.bottom {
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 99;
  background: #3aacff;
  height: 3.125rem;
  color: #fff;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
}
.bottom > p {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bottom > p:nth-child(2) {
  font-size: 0.75rem;
}
.bottoms {
  width: 100%;
  height: 3.125rem;
}
.c-type {
  width: 100%;
  height: 2.375rem;
  background: #fff;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  span {
    display: block;
    font-size: 1.05rem;
    margin-right: 1.2rem;
  }
}
.one {
  width: 100%;
  height: 1.5625rem;
  display: flex;
  align-items: center;
  color: #999999;
  background: #f4f4f4;
  font-size: 0.8125rem;
  padding-left: 0.75rem;
}
ul li p:first-child {
  background: #fff;
  font-size: 0.95rem;
  color: #3d3d3d;
  padding-left: 0.625rem;
  padding-top: 0.5rem;
}
ul li p:nth-child(2) {
  color: #bdbdbd;
  background: #fff;
  padding-left: 0.625rem;
  padding-top: 0.5rem;
  font-size: 0.75rem;
}
ul li p:nth-child(3) {
  text-align: right;
  padding-right: 0.3125rem;
  font-size: 0.8125rem;
  background: #fff;
  padding-left: 0.625rem;
}
ul li p:nth-child(3) span:nth-child(2) {
  color: red;
  margin-left: 0.75rem;
}
.askqustion {
  width: 100%;
  height: 2.5rem;
  font-size: 1rem;
  color: #00afff;
  text-align: center;
  line-height: 2.5rem;
  border: none;
  background: #fff;
  border-top: 0.0625rem solid#eeeeee;
}
.active {
  color: #73acff;
}
.clone {
  width: 100%;
  height: 3.125rem;
}
</style>