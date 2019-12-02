<template>
    <div>
        <div>
        <img :src="lis.CoverPhoto" alt="">
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
        ...mapState(["lis"]),
        
    },
    methods:{
        ...mapActions(["getList"])
    },
    created(){
        this.getList()
    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>