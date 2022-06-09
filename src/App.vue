<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <TodoHead></TodoHead>
    <list></list>
    <TodoFoot></TodoFoot>
  </div>
</template>

<script>
import TodoHead from './components/head.vue'
import list from './components/list.vue'
import TodoFoot from './components/foot.vue'

export default {
  name: "App",
  components: {
    TodoHead,
    list,
    TodoFoot
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
