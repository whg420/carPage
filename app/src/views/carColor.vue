<template>
  <div class="box">
    
    <p class="allse" @click="fromDesignColor">全部颜色</p>
    <div>
      <p class="nav">
        <span
          :class="count==index?'active':''"
          v-for="(item,index) in navs"
          :key="index"
          @click="hanle(item,index)"
        >{{item}}</span>
      </p>
      <ul v-for="(item,index) in lists[count]" :key="index">
        <li @click="colorhanle(item.Name,item.ColorId)">
          <span :style="{'background':item.Value}" ></span>
          {{item.Name}}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Axios from "axios";
import { mapState, mapActions, mapMutations } from 'vuex';
export default {
  props: {},
  components: {},
  data() {
    return {
      list: [],//颜色
      navlist: [],//年份
      count: 0,//下标
     
    };
  },
  computed: {
    ...mapState({
      navs:store=>store.CarColor.navlist,
      lists:store=>store.CarColor.list
    })
  },
  methods: {
    ...mapActions({
      getCarColor:"CarColor/getCarColor"
    }),
    ...mapMutations({
      setColorID:"carImg/setColorID"//设置颜色ID
    }),
    fromDesignColor(){
        this.$router.push({path:"colorDesign"})   
    },
    hanle(item, index) {
      (this.type = item), (this.count = index);
      console.log(item);
    },
    colorhanle(name,ColorId){
      let SerialID=this.$route.query.ID
       this.setColorID(ColorId);//传入颜色ID
        this.$router.push({
          path:"/colorDesign",
          query:{SerialID}})   
    }
  },
  created() {
  },
  mounted() {
   
    this.getCarColor(this.$route.query.ID)
  }
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
