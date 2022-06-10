<template>
  <div class="card">
    <h2>{{ card.name }}</h2>
    <!-- 插槽位置 -->
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: ["card"],
};
</script>
<style scoped>
.card {
  width: 100px;
  height: 200px;
  float: left;
  margin: 5px;
  overflow: hidden;
  background-color: blueviolet;
}
.card img {
  width: 100px;
  height: 160px;
}
</style>
