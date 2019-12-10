<template>
    <div>
        <div>
            <button @click="fromDesignColor" class="allcar">全部车款</button>
            <ol v-for="item in carNav" :key="item">
                <li>{{item}}</li>
            </ol>
        <ul v-for="(item,index) in datalist" :key="index">
         <p class="nav">{{item.exhaust_str}}/{{item.max_power_str}}&nbsp;&nbsp;{{item.inhale_type}}</p>
         <li>
             <p>
                 <span>{{item.market_attribute.year}}款{{item.car_name}}</span>
                 <span>{{item.market_attribute.dealer_price_min}}起</span>
             </p>
             <p>
                 <span>177马力无档CVT无级变速</span>
                 <span>指导价&nbsp;{{item.market_attribute.dealer_price_max}}</span>
             </p>
         </li>
        
        </ul>
        </div>
    </div>
</template>
/**
 * @description: 
 * @param {type} carNav年份，datalist：内容数据
 * @return: 
 */
<script>
import {mapState,mapMutations, mapActions} from "vuex"
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{
      ...mapState({
               datalist:store=>store.details.datlist,
                carNav:store=>store.details.carNav,
           })
          
           
    },
    methods:{
           ...mapActions({
               getCarList:"details/getCarList"
           }),
           fromDesignColor(){
                 let ID=2593
              this.$router.push({path:"/colorDesign",query:{ID}})
               
           }
    },
    created(){
         this.getCarList(2593)
    },
    mounted(){

    }
}
</script>
<style lang="scss" scoped>
   *{
       margin: 0;
       padding: 0;
       border:none;
   }
   //全部车款
   .allcar{
       width: 100%;
       height: 40px;
       text-align: center;
       line-height: 40px;
       color: #00afff;
       background: white;
       font-size: 17px;
       border-bottom: 1px solid #ccc;
   }
   //年份
   ol{
       width: 100%;
       height: 38px;
       color: #00afff;
       line-height: 40px;
       margin-top: 3px;
       font-size: 15px;
        padding-left: 8px;
   }
   //内容
   ul{
       .nav{//涡轮增压
            width: 100%;
           height: 25px;
           font-size: 12px;
           line-height: 25px;
           color: #666;
           background: #eee;
           padding-left: 8px;
       }
       li{//每个列表
            width: 90%;
           height: 62px;
           margin: 0px 10px;
           padding: 14px 3px;
           p:nth-child(1){
               height: 26px;
               font-size: 15px;
               display:flex;
               justify-content: space-between;
               span:nth-child(2){
                   font-size: 13px; 
                   color:red;
               }
           }
           p:nth-child(2){
               height: 20px;
               font-size: 12px;
               display:flex;
               justify-content: space-between;
               span:nth-child(1){
                   color:#b3b3b3;
               }
               span:nth-child(2){
                   color: #818181;
               }
           }

       }
      
   }
</style>>

