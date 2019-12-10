<template>
  <div class="box">
    <p class="allse" @click="fromDesignColor">全部颜色</p>
    <div>
      <p class="nav">
        <span
          :class="count==index?'active':''"
          v-for="(item,index) in navlist"
          :key="index"
          @click="hanle(item,index)"
        >{{item}}</span>
      </p>
      <ul v-for="(item,index) in list[count]" :key="index">
        <li>
          <span :style="{'background':item.Value}"></span>
          {{item.Name}}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Axios from "axios";
export default {
  props: {},
  components: {},
  data() {
    return {
      list: [],
      navlist: [],
      count: 0
    };
  },
  computed: {},
  methods: {
    fromDesignColor(){
        this.$router.push({path:"colorDesign"})   
    },
    hanle(item, index) {
      (this.type = item), (this.count = index);
      console.log(item);
    }
  },
  created() {
    Axios.get(
      "https://baojia.chelun.com/v2-car-getModelImageYearColor.html?SerialID=2364"
    ).then(res => {
      //    this.list=res.data.data;
      console.log(JSON.parse(JSON.stringify(res.data.data)), "----------color");
      // 请求到的数据{'2019':2019对应的数据数组,'2020':2020对应的数据数组.........}
      let data = JSON.parse(JSON.stringify(res.data.data));
      let values = Object.values(data);
           this.list = values;
           console.log(values)
      let keys = Object.keys(data);
           this.navlist = keys;
           console.log(keys)

      // 对象转数组后
      // ['2019','2020'.....]
      // ['2019对应的数据数组','2020对应的数据数组'.....]
    });
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}

.box {
  width: 100%;
  height: 100%;
}
.allse {
  width: 100%;
  height: 40px;
  color: skyblue;
  text-align: center;
  line-height: 40px;
}
.nav {
  width: 100%;
  height: 40px;
  display: flex;
  line-height: 40px;
  span {
    width: 16%;
    margin-left: 2px;
    font-size: 14px;
  }
}
ul {
  width: 100%;
  margin-top: 5px;

  li {
    width: 48%;
    height: 35px;
    float: left;
    margin: 2px;
    border: 1px solid #3aacff;
    border-radius: 5px;
    display: flex;
    line-height: 35px;
    > span {
      width: 20px;
      height: 20px;
      border: 1px solid #818181;
      display: block;
      margin: 5px;
    }
  }
}
.active {
  color: #00afff;
}
</style>
