<template>
  <div class="itemList">
    <!-- transition单个元素动画 -->
    <!-- transition-group动画组(多个元素相同动画), 里面的每个元素都要有:key值, 
    相当于给每个有key的都加上动画, 所以子元素之间的动画是独立的, 如果包再一个标签中就会完全同步 -->
    <transition-group name="item" mode="">
      <item v-for="item in items" :key="item.id" :item="item"></item>
    </transition-group>
    <div v-show="isFirst">欢迎</div>
    <div v-show="isLoding">加载中</div>
  </div>
</template>
<script>
import Vue from "vue";
import item from "./item.vue";
import pubsub from "pubsub-js";
import axios from "axios";
export default {
  name: "todo-list",
  data() {
    return {
      isFirst: true,
      isLoding: false,
      items: [],
    };
  },
  components: {
    item,
  },
  watch: {
    items: {
      deep: true,
      handler() {
        this.sendCount(); //改变时重新发送计数
      },
    },
  },
  mounted() {
    //item
    this.$bus.$on("itemBlur", this.itemBlur);
    this.$bus.$on("checkChange", this.checkChange);
    this.$bus.$on("deleteItem", this.deleteItem);
    this.$bus.$on("editItem", this.editItem);

    //head
    this.$bus.$on("searchItem", this.searchItem);

    //foot
    this.$bus.$on("deleteChecked", this.deleteChecked);
    this.$bus.$on("sendCount", this.sendCount);
    this.$bus.$on("saveItem", this.saveItem);
  },

  methods: {
    //item
    itemBlur(id, v) {
      this.items.forEach((i) => {
        if (i.id === id) {
          i.edit = false;
          i.name = v;
        }
      });
    },
    checkChange(id, v) {
      console.log(id, v);
      this.items.forEach((i) => {
        if (i.id === id) {
          console.log("items.forEach");
          i.checked = v;
        }
      });
      this.pubId = pubsub.publish("itemCount", [
        this.getCount(),
        this.items.length,
      ]);
    },
    editItem(id) {
      this.items.forEach((i) => {
        if (i.id === id) {
          i.edit = true;
        }
      });
    },
    saveItem(id, v) {
      this.items.forEach((i) => {
        if (i.id === id) {
          i.name = v;
        }
      });
    },
    deleteItem(id) {
      this.items = this.items.filter((item) => {
        return item.id !== id; //返回items中所有id>3的
      });
    },

    //head
    searchItem(v) {
      this.isFirst = false;
      axios.get("https://api.github.com/search/users?q=" + v).then(
        (response) => {
          this.items = response.data.items;
        },
        (error) => {
          console.log(error.message);
        }
      );
    },

    //foot
    deleteChecked() {
      console.log("deleteChecked");
      this.items = this.items.filter((item) => {
        return item.checked !== true; //返回items中所有id>3的
      });
    },
    // foot 计数
    sendCount() {
      this.pubId = pubsub.publish("itemCount", [
        this.getCount(),
        this.items.length,
      ]);
      // console.log('sendCount')
      //   this.$bus.$emit("getSendCount", this.getCount(),this.items.length);
    },
    getCount() {
      return this.items.reduce((pre, current) => {
        //依次对每个元素执行这个函数把结果作为下一次执行的pre, current为便利的每个值
        if (current.checked === true) {
          return pre + 1; // 计算大于10的值的数量;
        }
        return pre;
      }, 0); // 0为pre的初始值
    },
  },
};
</script>

<style scoped>
.itemList {
  width: 100%;
  height: 500px;
  overflow: auto;
}
@keyframes come {
  from {
    transform: translateX(-100%);
    height: 0;
  }
  to {
    transform: translateX(0);
    height: 200px;
  }
}

.item-enter-active {
  animation: come 1s;
}
/* 离开过程中 */
.item-leave-active {
  animation: come 1s reverse;
}
</style>