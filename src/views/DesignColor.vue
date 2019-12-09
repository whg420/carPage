<template>
    <div class="box">
         <div class="navlist">
             <p><span @click="allclolor">全部颜色</span></p>
            <p><span @click="car">车款</span></p>
             </div>
         <div class="connent">
             <ul v-for="(item,index) in list" :key="index" class="connent_ul">
                 <li connent_li>{{item.Name}}</li>
                 <!-- <ol v-for="(item,index) in item.List" :key="index" class="connent_img" >
                     111
                 </ol> -->
             </ul>
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
            list:[]
        }
    },
    computed:{

    },
    methods:{
        allclolor(){
            this.$router.push('/carColor')
        },
        car(){
            this.$router.push('/carDesign')
        }
      
    },
    created(){
     axios.get('http://baojia.chelun.com/v2-car-getImageList.html?SerialID=4765').then((res)=>{
         this.list=res.data.data
         console.log(JSON.parse(JSON.stringify(this.list)));
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
  }
  .navlist{
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: space-around;
      text-align: center;
      line-height: 50px;
  }
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
  .connent{
      width: 100%;
  }
  .connent_ul{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
  }
  .connent_img{
      width: 33%;
      border: 1px solid #000;
  }
 
</style>
  
