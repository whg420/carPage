<template>
  <div>
    <Drawer :closable="false" v-model="value1">
    {{value1}}
    </Drawer>
  </div>
</template>
<script>
export default {
  props: ["value1"],
  components: {},
  data() {
    return {
     
    };
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped lang="">
</style>