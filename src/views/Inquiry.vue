<template>
  <div>
    <Poptip :title="title" :content="content" placement="bottom-end">
      <p class="hint">可向多个商家咨询最低价，商家及时回复@</p>
    </Poptip>
    <ul class="iqx">
      <li>
        <img :src="pic" alt />
      </li>
      <li>
        <p>{{carList.AliasName}}</p>
        <p>{{carList.list[count].market_attribute.year}}款{{carList.list[count].car_name}}</p>
      </li>
      <li>
        <b>></b>
      </li>
    </ul>
    <p class="title">个人信息</p>
    <ul class="personageList">
      <li>
        <b>姓名</b>
        <input type="text" />
      </li>
      <li>
        <b>手机</b>
        <input type="text" />
      </li>
      <li>
        <b>城市</b>
        <b @click="fromAddress">></b>
      </li>
      <button>询问最低价</button>
    </ul>

    <p class="title">选择报价经销商</p>
    <ul v-for="(item,index) in list" :key="index">
      <Check :item="item" :single="single" />
    </ul>
    <!-- <Check :list="list" :single="single"/> -->
  </div>
</template>

<script>
import axios from "axios";
import Check from "../components/Inquiry/check.vue";
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  data() {
    return {
      pic: "",
      count: this.$route.query.index,
      MasterID: this.$route.query.MasterID,
      list: [],
      single: false,
      content: "私人信息严格保密，最新报价立等可取",
      title: "安全    安心省力    贴心服务"
    };
  },
  components: {
    Check
  },
  computed: {
    ...mapState({
      carList: store => store.details.carList,
      datlist: store => store.details.datlist,
      InquiryList: store => store.Inquiry.InquiryList
    })
  },
  methods: {
    ...mapActions({
      getCarList: "details/getCarList",
      InquiryActionList: "Inquiry/InquiryActionList"
    }),
    fromAddress() {
      this.$router.push("/address");
    }
  },
  created() {
    axios
      .get(
        `https://baojia.chelun.com/v2-car-getMakeListByMasterBrandId.html?MasterID=${this.MasterID}`
      )
      .then(res => {
        let data = res.data.data;
        data.forEach(item => {
          let pic = item.GroupList.forEach(item => {
            let ID = this.$route.query.ID;
            if (item.SerialID == ID) {
              this.pic = item.Picture;
            }
          });
        });
      });
    let ID = this.$route.query.ID;
    this.getCarList(ID);
    let carId = this.datlist[this.count].car_id;
    let cityId = 2;

    this.InquiryActionList(carId, cityId);

    axios
      .get(
        `https://baojia.chelun.com/v2-dealer-alllist.html?carId=${carId}&cityId=${2}`
      )
      .then(res => {
        console.log(res.data.data, "-------------------------res");
        this.list = res.data.data.list;
      });
  }
};
</script>

<style scoped>
div {
  width: 100%;
}
.ivu-poptip {
  width: 100%;
  height: 2rem;
}
.ivu-poptip-rel {
  width: 100%;
  height: 2rem;
}
.ivu-btn ivu-btn-default {
  width: 100%;
  height: 2rem;
}
.hint {
  width: 23.4375rem;
  height: 2rem;
  background: #79cd92;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.top,
.bottom {
  text-align: center;
}
.center {
  width: 100%;
  margin: 0.625rem auto;
  overflow: hidden;
}
.center-left {
  float: left;
}
.center-right {
  float: right;
}
.iqx {
  width: 100%;
  height: 6.25rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #fff;
}
.iqx > li > p {
  background: #fff;
}
.iqx > li:nth-child(1) {
  border: 0.0625rem #ccc solid;
}
.iqx > li:nth-child(3) {
  color: #ccc;
  font-size: 1.4rem;
}
.iqx > li > img {
  width: 7.25rem;
  height: 4.375rem;
}
.iqx > li > p:nth-child(1) {
  font-size: 1.125rem;
}
.iqx > li > p:nth-child(2) {
  font-size: 0.9375rem;
}
div {
  width: 100%;
  height: 100%;
  background: #f4f4f4;
}
.title {
  width: 100%;
  height: 1.625rem;
  background: #eeeeee;
  font-size: 0.78rem;
  display: flex;
  align-items: center;
  padding-left: 0.6rem;
}
.personageList {
  width: 100%;
  height: 14.375rem;
  background: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.personageList > li {
  width: 95%;
  height: 3.125rem;
  margin: 0 auto;
  border-bottom: 0.0625rem #ccc solid;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.personageList > li > input {
  border: none;
}
.personageList > button {
  width: 80%;
  height: 2.5rem;
  background: #3aacff;
  border: none;
  border-radius: 0.3125rem;
  color: #fff;
  margin-top: 20px;
}
</style>