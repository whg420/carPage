<template>
    <div class="box">
         <div class="navlist">
             <p><span @click="allclolor">全部颜色</span></p>
            <p><span @click="car">车款</span></p>
             </div>
         <div class="connent"></div>
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

        }
    },
    computed:{

    },
    methods:{
        allclolor(){
            this.$router.push('/allclolor')
        },
        car(){
            this.$router.push('/car')
        }
      
    },
    created(){
     
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
</style>
  
