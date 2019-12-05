<template>
  <div>
<<<<<<< HEAD
      <!-- mask-style="background: rgba(0, 0, 0, 0)" -->
    <Drawer :closable="false"  v-model="value1" >
=======
    <Drawer :closable="false"  v-model="value1">
>>>>>>> 2d4599281a2e9d571e48f83d40923960eabc7909
      <ul v-for="(item,index) in arList" :key="index" class="Art">
          <li class="ArtTitle">{{item.GroupName}}</li>
          <ol v-for="(item,index) in item.GroupList" :key="index" class="GroupList" @click="cks(item)">
               <img :src="item.Picture" alt="">
              <ul class="GroupList_ul">
              <li>{{item.AliasName}}</li>
              <li class="colorRed">{{item.DealerPrice}}</li>
              </ul>
          </ol>
      </ul>
    </Drawer>
  </div>
</template>

<script>
/**
 * 引入axios
 * @params axios
 */
import axios from "axios";
export default {
    /**
 * 父传子将控制的value1变量和arList数据传递到抽屉组件
 * @params axios
 */
  props: ["value1","arList"],
  data() {
    return {
        //  value1: false
    };
  },
  methods: {
                /**
 * 点击调路由传参
 * @params $router SerialID
 */
      cks(data){
          let ID=data.SerialID
         this.$router.push({path:"/detaile",query:{ID}})        
      }

  },

  mounted() {
   
  }
};
</script>

<style scoped>
.Art{
    width: 114%;
    margin-left: -1rem;
}
.Art:nth-child(1){
    margin-top: -1rem;
}
.Art>.ArtTitle{
    width: 100%;
    height: 1.5rem;
    background: #f2f2f2;
    color: #717171;
    padding-left:1rem ;

}
.GroupList{
    width: 100%;
    height: 4.5rem;
    display: flex;
    justify-content: left;
    align-items: center;
    border-bottom: 0.0625rem #ccc solid;
    padding-left:0.875rem ;

}
.GroupList>img{
    width: 5.625rem;
    height: 3.75rem;
}
.GroupList>.GroupList_ul{
    display: flex;
    flex-direction: column;
}
.colorRed{
    color: #f00;
}

</style>