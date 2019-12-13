<!--
 * @Author: your name
 * @Date: 2019-12-12 10:46:29
 * @LastEditTime: 2019-12-12 18:58:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \car\carPage\src\views\Swiper.vue
 -->
<template>
  <div class="swiper">
    <Carousel v-model="value1" loop>
      <CarouselItem>
        <div class="demo-carousel">1</div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">2</div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">3</div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">4</div>
      </CarouselItem>
    </Carousel>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      value1: 0
    };
  },
  computed: {
    ...mapState({
      SwiperList: store => store.details.SwiperList
    })
  },
  methods: {
    ...mapActions({
      SwiperActionList: "Swiper/SwiperActionList"
    })
  },
  created() {
    let arr = {
      SerialID: 2593,
      ImageID: 11,
      Page: 1,
      PageSize: 30
    };
    this.SwiperActionList(arr);
  }
};
</script>


<style lang="scss" scoped>
.swiper {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 1);
  display: flex;
  justify-content: center;
  align-items: center;
}
.ivu-carousel {
  width: 100%;
  height: 15rem;
  background: #fff;
}
</style>