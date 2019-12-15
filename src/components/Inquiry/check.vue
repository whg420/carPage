<!--
 * @Author: your name
 * @Date: 2019-12-10 08:25:30
 * @LastEditTime: 2019-12-12 16:27:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \carPage\src\components\Inquiry\check.vue
 -->
<template>
  <div class="ckeck">
    <Checkbox v-model="single" class="checkList">
      <ul>
        <li>{{item.dealerShortName}}</li>
        <li>{{item.address}}</li>
      </ul>
      <ol>
        <li>
          {{item.promotePrice}}
          <b class="redColor">万</b>
        </li>
        <li>售{{item.saleRange}}</li>
      </ol>
    </Checkbox>
  </div>
</template>
<script>
export default {
  props: ["item", "single"],
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped lang="css">
.redColor {
  color: #f00;
}
.ckeck {
  width: 100%;
  background: #fff;
}
.checkList {
  width: 95%;
  height: 5.3125rem;
  display: flex;
  border-bottom: 1px #ccc solid;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  background: #fff;
}
.checkList > ul {
  width: 80%;
}
.checkList > ul > li:nth-child(1) {
  font-size: 1rem;
}
.checkList > ul > li:nth-child(2) {
  font-size: 0.7rem;
}
.checkList > ol > {
  width: 20%;
}
</style>