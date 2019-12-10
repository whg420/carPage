<template>
    <div>
 <ul>
          <li v-for="(item,index) in list" :key="index">
              <img :src="item.Url" alt="">
          </li>
      </ul>
    </div>
</template>

<script>
    export default {
        props:['list']
    }
</script>

<style lang="scss" scoped>
ul{
    width: 100%;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-around;
    li{
   width: 33%;
   display: flex;
   margin-bottom: 0.35rem;
   img{
       width: 100%;
       height: 7.6875rem;
   }
}
}
</style>