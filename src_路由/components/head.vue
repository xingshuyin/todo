<template>
  <div>
    <input class="searchInput" type="text" @keyup.enter="searchItem" />
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "todo-head",
  methods: {
    searchItem(e) {
      this.$bus.$emit("searchItem", e.target.value);
    },
  },
};
</script>
<style scoped>
.searchInput {
  border-radius: 30px;
  width: 50%;
  height: 30px;
  margin-bottom: 50px;
}
</style>