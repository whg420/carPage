<template>
  <div>

    {{arrallList}}
  <van-index-bar>
  <van-index-anchor index="1">标题1</van-index-anchor>
  <van-cell title="文本" />
  <van-cell title="文本" />
  <van-cell title="文本" />

  <van-index-anchor index="1">标题1</van-index-anchor>
  <van-cell title="文本" />
  <van-cell title="文本" />
  <van-cell title="文本" />
<van-index-anchor index="1">标题1</van-index-anchor>
  <van-cell title="文本" />
  <van-cell title="文本" />
  <van-cell title="文本" />
<van-index-anchor index="1">标题1</van-index-anchor>
  <van-cell title="文本" />
  <van-cell title="文本" />
  <van-cell title="文本" />
<van-index-anchor index="1">标题1</van-index-anchor>
  <van-cell title="文本" />
  <van-cell title="文本" />
  <van-cell title="文本" />

</van-index-bar>

  </div>
</template>
<script>
import Vue from 'vue'
import {IndexBar,IndexAnchor} from 'vant'
Vue.use(IndexBar).use(IndexAnchor)
import {mapState,mapActions} from 'vuex'
export default {
  
  data(){
   return {
     
    }
  },
  computed:{
   ...mapState({
      arrallList: store => store.home.allList
    })
  },
  methods:{
   ...mapActions({
       getMasterAllList:"home/getMasterAllList"
   })
  },
  created(){
    this.getMasterAllList()
    // console.log('$store...',this.$store)
   
  },
  mounted(){

  }
}
</script>
<style scoped lang="">

</style>