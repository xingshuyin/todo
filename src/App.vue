<template>
  <div id="app">
    <!-- <button @click="shiftImg">切换图标</button>
    <br />
    <transition-group name="head-img" appear>
      <img
        alt="Vue logo"
        v-show="headimg === 1"
        src="./assets/logo.png"
        :key="1"
      />
      <img
        alt="Vue logo"
        v-show="headimg === 2"
        src="./assets/logo.png"
        :key="2"
      />
    </transition-group> -->

    <TodoHead></TodoHead>
    <list></list>
    <TodoFoot></TodoFoot>

    <card :card="{ name: 'liu' }">
      <!-- 加了插槽后, 组件标签里的内容就会被放在插槽里 -->
      <img
        src="https://img1.baidu.com/it/u=630883413,288568907&fm=253&fmt=auto&app=138&f=GIF?w=300&h=300"
        alt=""
      />
    </card>
    <card :card="{ name: 'liu' }"> 简介 </card>
  </div>
</template>

<script>
import TodoHead from "./components/head.vue";
import list from "./components/list.vue";
import TodoFoot from "./components/foot.vue";
import card from "./components/card.vue";
export default {
  name: "App",
  data() {
    return {
      headimg: 1,
    };
  },
  mounted() {
    // setInterval(this.shiftImg,1100)
  },
  components: {
    TodoHead,
    list,
    TodoFoot,
    card,
  },
  methods: {
    shiftImg() {
      if (this.headimg === 1) {
        this.headimg = 2;
      } else {
        this.headimg = 1;
      }
    },
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
.head-img-enter-active {
  animation: headani 1s;
}
.head-img-leave-active {
  animation: headani 1s reverse;
}
@keyframes headani {
  from {
    border-radius: 50%;
    width: 10px;
    height: 10px;
    transform: rotate(250deg);
  }
  to {
    border-radius: 0;
    width: 200px;
    height: 200px;
  }
}
</style>
