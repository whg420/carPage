<template>
    <div>
        <div>
            <button @click="fromDesignColor">全部车款</button>
            <ol v-for="item in carNav" :key="item">
                <li>{{item}}</li>
            </ol>
        <ul v-for="(item,index) in datalist" :key="index">
         <p>{{item.exhaust_str}}/{{item.max_power_str}}&nbsp;&nbsp;{{item.inhale_type}}</p>
         <li>{{item.market_attribute.year}}款{{item.car_name}}</li>
        </ul>
        </div>
    </div>
</template>
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
              
                this.$router.push({path:"designColor"})   
           }
    },
    created(){
         this.getCarList(2593)
    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>