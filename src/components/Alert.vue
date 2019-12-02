<template>
  <div>
    <Drawer :closable="false"  v-model="value1" mask-style="background: rgba(0, 0, 0, 0)">
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
    margin-left: -16px;
}
.Art:nth-child(1){
    margin-top: -16px;
}
.Art>.ArtTitle{
    width: 100%;
    background: #f2f2f2;
    margin-bottom: 1px;
}
.GroupList{
    width: 100%;
    display: flex;
    justify-content: left;
    align-items: center;
    border-bottom: 1px #ccc solid;
}
.GroupList>img{
    width: 90px;
    height: 50px;
}
.GroupList>.GroupList_ul{
    display: flex;
    flex-direction: column;
}
.colorRed{
    color: #f00;
}
</style>