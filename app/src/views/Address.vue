<template>
  <div>
    <!-- <Alert :value1="value1"/> -->
    <p>自动定位</p>
    <ul>
      <li @click="fromDetaile">{{defaultAddress.CityName}}</li>
    </ul>
    <p>省市</p>
    <ul v-for="(item,index) in Address" :key="index">
      <li @click="alertLeft"><span>{{item.CityName}}</span><span>></span></li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import Alert from '../components/Address/Alert'
  export default {
    data() {
      return {
        defaultAddress:[],
        Address:[],
         value1: false
      }
    },
    component:{
      Alert
    },
    created(){
       axios.get('https://baojia.chelun.com/location-client.html').then((res)=>{
                this.defaultAddress=res.data.data
            })
        axios.get('https://baojia.chelun.com/v1-city-alllist.html').then((res)=>{
                this.Address=res.data.data;
        })
    },
    methods: {
     fromDetaile(){
         this.$router.push({path:"/inquiry"})   
      },
      alertLeft(){
      // this.value1=true;
      // console.log(this.value1);
      
           }
    },
   
  }
</script>

<style scoped>
div{
  width: 100%;
  height: 100%;
}
p{
  width: 100%;
  background: #f4f4f4;
}
ul{
  width: 100%;
}
ul>li{
  width: 100%;
  height: 40px;
  display: flex;
  justify-content:space-between;
  align-items: center;
  border-bottom: 1px #ccc solid;
  padding-left: 10px;
  padding-right: 10px;
}
</style>