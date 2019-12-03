<template>
    <div>
fromInquiry
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
    export default {
        data() {
            return {
                
            }
        },
        methods: {
            fromAddress(){
            this.$router.push('/address')

            }
        },
        created(){
           
        }
    }
</script>

<style scoped>
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