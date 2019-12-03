<template>
    
    <div class="box">
     
        <div class="navimg">
             <img :src="list.CoverPhoto" alt="" @click="tab">
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
                <span @click="alldat">全部</span>
                <span :class="count==index?'active':''" v-for="(item,index) in nav"  :key="index" @click="alllist(item,index)">{{item}}</span>
                
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
            nav:[],
            datalist:[],
            count:0
        }
    },
    computed:{
     
    },
    methods:{
        alldat(){
            this.datalist=this.list.list
        },
      alllist(ite,id){
         this.count=id
         let result= this.list.list.filter(item=>item.market_attribute.year==ite)
         this.datalist=result
        //  if(id==0){
        //       this.datalist=this.list.list
        //  }else{
        //       let result= this.list.list.filter(item=>item.market_attribute.year==item)
        //    this.datalist=result
        //  }
         
      },
      tab(){
           this.$router.push('/tab')
      }
     
      
        
    },
    created(){
   
        axios.get('https://baojia.chelun.com/v2-car-getInfoAndListById.html?SerialID='+this.$route.query.ID).then((res)=>{
        
            this.list=JSON.parse(JSON.stringify(res.data.data))
            console.log(JSON.parse(JSON.stringify(res.data.data)))
            this.datalist=JSON.parse(JSON.stringify(res.data.data.list))
            let newdata=this.datalist.map((item,index)=>{
                return item.market_attribute.year
            })
           
            console.log(Array.from(new Set(newdata)))
            this.nav= Array.from(new Set(newdata))
            console.log(this.nav)
        })
    },
    mounted(){

    }
}
</script>
<style lang="scss" scoped>
.box{
     width: 100%;
     height: 100%;
     position: relative;
     overflow: auto;
     background: #f4f4f4;
 }
 .navimg{
     width: 100%;
     height:10.3125rem;
     overflow: hidden;
     position: relative;
     img{
 width: 100%;
 height: 150%;
position: absolute;
top: -2.6875rem;
     }
 }
 .info{
       width: 100%;
       height:4.6875rem;
      justify-content: space-between;
      display: flex;
      margin-bottom: 0.625rem;
      background: #fff;
      display: flex;
      align-items: center;
     .action{
     button{
         width: 11.75rem;
         height: 2.1875rem;
         text-align: center;
         background: #00afff;
         color: #fff;
         border-radius: 0.3125rem;
         border:none;
         font-size: 1rem;
         margin-right: 0.4375rem;
     }
     }
 }
 .info1 p:first-child{
     font-size: 18px;
     color: red;
     font-weight: 400;
     padding-left: 0.8125rem;
 }
 .info1 p:nth-child(2){
     font-size: 0.8125rem;
     color: silver;
     padding-left: 0.8125rem;
 }
 .bottom{
     position: fixed;
    width: 100%;
    bottom: 0;
    z-index: 99;
    background: #3aacff;
    height:3.125rem;
    color: #fff;
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
 }
 .bottom>p:nth-child(2){
     font-size: 0.75rem;
 }
 .c-type{
    width: 100%;
    height:2.375rem;
    background: #fff;
    display: flex;
    align-items: center;
    padding-left: 1rem;
    span{
    font-size: 1.05rem;
    margin-right: 1.5rem;
    }
 }
 .one{
     width: 100%;
     height: 1.5625rem;
     display: flex;
     align-items: center;
     color:#999999;
     background:#F4F4F4;
     font-size: 0.8125rem;
     padding-left: 0.75rem;
 }
 ul li p:first-child{
     background: #fff;
     font-size: 0.95rem;
     color: #3D3D3D;
     padding-left: 0.625rem;
     padding-top: 0.5rem;
 }
 ul li p:nth-child(2){
     color: #BDBDBD;
     background: #fff;
     padding-left: 0.625rem;
     padding-top: 0.5rem;
     font-size: 0.75rem;
 }
 ul li p:nth-child(3){
     text-align: right;
     padding-right: 0.3125rem;
     font-size: 0.8125rem;
     background: #fff;
     padding-left: 0.625rem;

 }
  ul li p:nth-child(3) span:nth-child(2){
      color: red;
      margin-left: 0.75rem;
      
  }
  .askqustion{
     width: 100%;
     height: 2.5rem;
     font-size: 1rem;
     color:#00afff;
     text-align: center;
     line-height: 2.5rem;
     border: none;
     background: #fff;
     border-top: 0.0625rem solid#eeeeee;

  }
  .active{
        color: #73acff
    }

</style>