<template>
  <div>
    <p>自动定位</p>
    <ul>
      <li>{{defaultAddress.CityName}}</li>
    </ul>
    <p>省市</p>
    <ul v-for="(item,index) in Address" :key="index">
      <li><span>{{item.CityName}}</span><span>></span></li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
    data() {
      return {
        defaultAddress:[],
        Address:[]
      }
    },
    created(){
       axios.get('https://baojia.chelun.com/location-client.html').then((res)=>{
                this.defaultAddress=res.data.data
            })
        axios.get('https://baojia.chelun.com/v1-city-alllist.html').then((res)=>{
          console.log(res.data.data);
          
                this.Address=res.data.data;
        })
    }
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