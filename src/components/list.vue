<template>
  <div>
    <div v-for="item in items" :key="item.id">
      <label
        ><input type="checkbox" @change="changeItem($event,item.id)" :checked="item.checked"/> {{ item.name }}
      </label>
      <button @click="deleteItem(item.id)">删除</button>
    </div>
  </div>
</template>
<script>
import { nanoid } from "nanoid";
import pubsub from 'pubsub-js';
export default {
  name: "todo-list",
  data() {
    return {
      items: [
        {
          name: "喝酒",
          id: 1,
          checked: false,
        },
        {
          name: "抽烟",
          id: 2,
          checked: true,
        },
      ],
    };
  },
  watch: {
    items: {
      deep: true,
      handler() {
        this.pubId = pubsub.publish('itemCount', [this.getCount(),this.items.length])
        // this.sendCount()
      },
    },
  },
  mounted() {
    this.$bus.$on("pushItem", this.pushItem);
    this.$bus.$on("deleteChecked", this.deleteChecked);
    this.$bus.$on("sendCount", this.sendCount);
    // this.sendCount()
    this.pubId = pubsub.publish('itemCount', [this.getCount(),this.items.length])
  },

  methods: {
    sendCount(){
      this.pubId = pubsub.publish('itemCount', [this.getCount(),this.items.length])
      // console.log('sendCount')
      //   this.$bus.$emit("getSendCount", this.getCount(),this.items.length);
    },
    changeItem(e,id) {
      this.items.forEach((i) => {
          if(i.id===id){
              i.checked=e.target.checked
          }
      });
    },
    pushItem(value) {
      this.items.push({
        name: value,
        id: nanoid(),
        checked: false,
      });
    },
    deleteChecked(){
      this.items = this.items.filter((item) => {
        return item.checked === false; //返回items中所有id>3的
      });
    },
    deleteItem(id) {
      this.items = this.items.filter((item) => {
        return item.id !== id; //返回items中所有id>3的
      });
    },
    getCount () {
          return this.items.reduce((pre, current) => {
            //依次对每个元素执行这个函数把结果作为下一次执行的pre, current为便利的每个值
            if (current.checked === true) {
              return pre + 1; // 计算大于10的值的数量;
            }
            return pre;
          }, 0); // 0为pre的初始值
        }
  },
};
</script>

