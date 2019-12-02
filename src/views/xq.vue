<template>
    
    <div class="box">
     
        <div class="navimg">
             <img :src="list.CoverPhoto" alt="">
        </div>
        <div class="info">

                <div class="info1">
                <p v-if="list.market_attribute">{{list.market_attribute.dealer_price}}</p>
                <p v-if="list.market_attribute">指导价{{list.market_attribute.official_refer_price}}</p>
                </div>
                <div class="action">
                   <button>询问底价</button>
                </div>
        </div>
        <div class="carlist">
            <div class="c-type">

                <span :class="count==index?'active':''" v-for="(item,index) in nav"  :key="index" @click="alllist(index)">{{item}}</span>
                
            </div>
            
            <div class="conlist" v-for="(item,index) in datalist" :key="index">
                 <p class="one">{{item.exhaust_str}}/{{item.max_power_str}}{{item.inhale_type}}</p>
                 <ul>
                     <li>
                         <p>{{item.market_attribute.year}}{{item.car_name}}</p>
                         <p>156马力9档手自一体</p>
                         <p>
                             <span>指导价{{item.market_attribute.dealer_price_max}}</span>
                              <span>{{item.market_attribute.dealer_price_min}}起</span>
                         </p>
                         <button class="askqustion">询问底价</button>
                     </li>
                 </ul>
            </div>
        </div>
        <div class="bottom">
            <p>询问底价</p>
            <p>本地经销商问你报价</p>
        </div>
       
    </div>
</template>
<script>
import axios from 'axios'

export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            list:[],
            nav:['全部','2020','2019'],
            datalist:[],
            count:0
        }
    },
    computed:{
     
    },
    methods:{
      alllist(id){
        this.count=id
         if(id==0){
              this.datalist=this.list.list
         }else if(id==1){
              let result= this.list.list.filter(item=>item.market_attribute.year==2020)
           this.datalist=result
         }else if(id==2){
              let result= this.list.list.filter(item=>item.market_attribute.year==2019)
          this.datalist=result
         }
         
      },
     
      
        
    },
    created(){
        
        axios.get('https://baojia.chelun.com/v2-car-getInfoAndListById.html?SerialID=2364').then((res)=>{
            
            this.list=JSON.parse(JSON.stringify(res.data.data))
            console.log(JSON.parse(JSON.stringify(res.data.data)))
            this.datalist=JSON.parse(JSON.stringify(res.data.data.list))
        })
    },
    mounted(){

    }
}
</script>
<style lang="scss" scoped>
*{
    list-style: none;
  
    padding: 0;
}

 .box{
     width: 100%;
     height: 100%;
     position: relative;
     overflow: auto;
     
     
 }

 .navimg{
     width: 100%;
     height: 165px;
     img{
       width: 100%;
     height: 165px;
     }
 }
 .info{
       width: 100%;
       height: 75px;
      justify-content: space-between;
      display: flex;
     .action{
      line-height: 75px;
     button{
         width: 189px;
         height: 35px;
         text-align: center;
         background: #00afff;
         color: #fff;
         border-radius: 5px;
         border:none;
     }
     }
 }
 .info1 p:first-child{
     font-size: 18px;
     color: red;
     font-weight: 400;
 }
 .info1 p:nth-child(2){
     font-size: 13px;
     color: silver;
   
 }
 .bottom{
     position: fixed;
    width: 100%;
    bottom: 0;
    z-index: 99;
    background: #3aacff;
    height: 50px;
    color: #fff;
 }
 .c-type{
    width: 100%;
   
    height: 46px;
    line-height: 46px;
    background: #fff;
    display: flex;
   
    span{
     margin-left: 15px;
    }
 }
 .one{
     height: 15px;
     color: #999999;
     background:#F4F4F4;
     font-size: 13px;
 }
 ul li p:first-child{
     color: #3D3D3D;
 }
 ul li p:nth-child(2){
     color: #BDBDBD;
 }
 ul li p:nth-child(3){
     text-align: right;
     padding-right: 5px;
     font-size: 13px;
 }
  ul li p:nth-child(3) span:nth-child(2){
      
      color: red;
      margin-left: 12px;
      
  }
  .askqustion{
     width: 100%;
     height: 40px;
     border-top: 1px solid #eee;
     font-size: 16px;
     color:#00afff;
     text-align: center;
     line-height: 40px;
     border: none;
     background: #eee;
  }
  .active{
        color: skyblue;
    }
</style>