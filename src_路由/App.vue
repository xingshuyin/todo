<template>
  <div id="app">
    <TodoHead></TodoHead>
    <list></list>
    <TodoFoot></TodoFoot>

    <card :card="{ name: 'liu' }">
      <!-- 没有slot属性的放到没有名字的slot标签里里, 偶几个放几个 -->
      <span>默认</span>
      <img slot="card-body"
        src="https://img1.baidu.com/it/u=630883413,288568907&fm=253&fmt=auto&app=138&f=GIF?w=300&h=300" alt="" />
      <!-- 把元素放到对应插槽 -->
      <span slot="card-foot">游戏</span>
    </card>
    <!-- 插槽中加入多个元素 -->
    <card :card="{ name: 'liu' }">
      <template slot="card-foot">
        <span>内容1</span>
        <span>内容2</span>
      </template>
    </card>

    <card :card="{ name: 'liu' }">
      <template scope="{cardData}" slot="card-body">
        <span v-for="d in cardData" :key="d"> {{ d }}</span>
      </template>
    </card>

    <store></store>
    <students></students>


    <router-link to="/page1" active-class="active">page1</router-link>
    <router-link to="/page2" active-class="active">page2</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
import TodoHead from "./components/head.vue";
import list from "./components/list.vue";
import TodoFoot from "./components/foot.vue";
import card from "./components/card.vue";
import store from "./components/store.vue";
import students from "./components/person.vue";
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
    store,
    students,
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

.active {
  background-color: chartreuse;
}
</style>
