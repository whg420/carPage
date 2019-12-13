<!--
 * @Author: your name
 * @Date: 2019-12-09 11:54:08
 * @LastEditTime: 2019-12-12 20:51:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue11.29\src\views\colorDesign.vue
 -->
<template>
    <div>
       <div class="box">
         <div class="navlist">
             <p @click="fromColor"><span>全部颜色</span></p>
             <p @click="fromDesign"><span>车款</span></p>
         </div>
            <div class="connent">
                  <CarImg v-for="(item,index) in seriesDate" :key="index" :item="item"/>
            </div> 
         </div>
    </div>

</template>
<script>
import {mapState,mapActions,mapMutations} from 'vuex'
import CarImg from '../components/carImg.vue'
export default {
    props:{

    },
    components:{
        CarImg
    },
    data(){
        return {
            SerialID:this.$route.query.SerialID
        }
    },
    computed:{
        ...mapState({
             seriesDate: store=>store.carImg.serDate
        })
    },
    methods:{
        ...mapActions({
           getCarImg:"carImg/getCarImg"
        }),
        fromColor(){
            let ID=this.SerialID
this.$router.push({
    path:"/carColor",
    query:{ID}
    })   
        },
        fromDesign(){
this.$router.push({path:"/carDesign"})   
        }
    },
    created(){

    },
    mounted(){ 
         console.log(this.$route.query)
        this.getCarImg(this.$route.query.SerialID);
      
    }
}
</script>
<style lang="scss" scoped>
.box{
      width: 100%;
      height: 100%;
  }
  .navlist{
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: space-around;
      text-align: center;
      line-height: 50px;
       p{
      line-height: 50px;
  }
  p:after{
     content: "";
    display: inline-block;
    padding-top: 10px;
    padding-right: 10px;
    border-top: 2px solid #ccc;
    border-right: 2px solid #ccc;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
    margin-left: 6px;
    vertical-align: 5%;
  }
  }
 
 
</style>
