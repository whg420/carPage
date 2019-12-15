<template>
    <div>
        <ul class="iqx">
            <li><img :src="pic" alt=""></li>
            <li>
                <p>{{carList.AliasName}}</p>
                <p>{{carList.list[count].market_attribute.year}}款{{carList.list[count].car_name}}</p>
                </li>
                <li><b>></b></li>
        </ul>
<p>个人信息</p>
<ul class="personageList">
    <li><b>姓名</b><input type="text"></li>
    <li><b>手机</b><input type="text"></li>
    <li><b>城市</b><b @click="fromAddress">></b></li>
    <button>询问最低价</button>
</ul>
<p>选择报价经销商</p>
    

    </div>
</template>

<script>
import axios from 'axios'
    import {mapState,mapActions, mapMutations}  from "vuex"

    export default {
        data() {
            return {
                pic:'',
                count:this.$route.query.index,
                MasterID:this.$route.query.MasterID
            }
        },
         computed: {
           ...mapState({
               carList:store=>store.details.carList,
               datlist:store=>store.details.datlist,
           }),
       },  
        methods: {
              ...mapActions({
               getCarList:"details/getCarList"
           }),
            fromAddress(){
            this.$router.push('/address')
            }
        },
        created(){
            axios.get(`https://baojia.chelun.com/v2-car-getMakeListByMasterBrandId.html?MasterID=${this.MasterID}`).then((res)=>{
                let data=res.data.data;
                console.log(data);
                data.forEach(item => {
                    let pic=item.GroupList.forEach(item => {
            let ID=this.$route.query.ID;
        if(item.SerialID==ID){
            this.pic=item.Picture
        }
                    });
            })
            })
            let ID=this.$route.query.ID;
            this.getCarList(ID)
let carId=this.datlist[this.count].car_id;


            axios.get(`https://baojia.chelun.com/v2-dealer-alllist.html?carId=${carId}&cityId=${2}`).then((res)=>{
                console.log(res.data.data.list,'-------------------------res');
            })
        }
    }
</script>

<style scoped>
.iqx{
    width: 100%;
    height: 6.25rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #fff;
}
.iqx>li>p{
    background: #fff;
}
.iqx>li:nth-child(1){
    border: 0.0625rem #ccc solid;
}
.iqx>li:nth-child(3){
    color: #ccc;
    font-size: 1.4rem;
}
.iqx>li>img{
    width:7.25rem;
    height: 4.375rem;
}
.iqx>li>p:nth-child(1){
     font-size: 1.125rem
}
.iqx>li>p:nth-child(2){
     font-size: 0.9375rem
}
div{
    width: 100%;
    height: 100%;
    background: #f4f4f4;
}
p{
    background: #eeeeee;
    width:100% ;
}
.personageList{
    width: 100%;
    height: 230px;
    background: #fff;
      display: flex;
    align-items: center;
    flex-direction: column;
}
.personageList>li{
    width:95% ;
    height: 50px;
    margin: 0 auto;
    border-bottom: 1px #ccc solid;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.personageList>li>input{
    border: none;
}
.personageList>button{
    width: 80%;
    height: 40px;
    background: #3aacff;
    border: none;
    border-radius: 5px;
    color: #fff;
    margin-top: 20px;
}
</style>