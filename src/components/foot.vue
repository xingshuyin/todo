<template>
  <div class="foot" v-show="countAll > 0">
    {{ countChecked }} / {{ countAll }}
    <button class="deleteCheck" @click="deleteChecked">删除所有完成</button>
  </div>
</template>
<script>
import pubsub from "pubsub-js";
export default {
  name: "todo-foot",
  data() {
    return {
      countChecked: null,
      countAll: null,
    };
  },
  mounted() {
    // this.$bus.$on("getSendCount", (c,all)=>{
    //     console.log('getSendCount',c)
    //     this.countChecked = c
    //     this.countAll = all
    // })
    this.pubId = pubsub.subscribe("itemCount", (name, data) => {
      this.countChecked = data[0];
      this.countAll = data[1];
    });
    // this.$bus.$emit("sendCount");
  },
  beforeDestroy() {
    pubsub.unsubscribe(this.pubId);
  },
  methods: {
    deleteChecked() {
      this.$bus.$emit("deleteChecked");
    },
  },
};
</script>
<style scoped>
.foot {
  background-color: rgb(145, 160, 110);
  width: auto;
  border-radius: 30px;
}
.deleteCheck {
  border-radius: 30px;
}
</style>