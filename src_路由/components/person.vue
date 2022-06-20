<template>
  <div>
    <input type="text" @keyup.enter="enterstu" /> {{ getCount }}
    <div v-for="(item, index) in students" :key="item">{{ item }}</div>
    <!-- 模块化调用state -->
    <div v-for="(item, index) in this.$store.state.person.students" :key="item">{{ item }}</div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "person-stu",
  computed: {
    ...mapState("person", ["students"]),
    ...mapGetters("person", ["getCount"]),
  },
  methods: {
    enterstu(event) {
      console.log("enter");
      this.addstu(event.target.value);
      console.log(this.$store.getters["person/getCount"]);
      this.$store.commit("person/ADDSTU", event.target.value); //模块化store调用方法
    },
    ...mapActions("person", ["addstu"]),
    ...mapMutations("person", ["ADDSTU"]),
  },
};
</script>

<style>
</style>
