<template>
  <div>
    <!-- transition单个元素动画 -->
    <!-- transition-group动画组(多个元素相同动画), 里面的每个元素都要有:key值, 
    相当于给每个有key的都加上动画, 所以子元素之间的动画是独立的, 如果包再一个标签中就会完全同步 -->
    <transition-group name="item" mode="">
      <item v-for="item in items" :key="item.id" :item="item"></item>
    </transition-group>
  </div>
</template>
<script>
import { nanoid } from "nanoid";
import item from './item.vue';
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
          edit: false,
        },
        {
          name: "抽烟",
          id: 2,
          checked: true,
          edit: false,
        },
      ],
    };
  },
  components:{
    item
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
    //item
    this.$bus.$on("itemBlur", this.itemBlur)
    this.$bus.$on("checkChange", this.checkChange)
    this.$bus.$on("deleteItem", this.deleteItem)
    this.$bus.$on("editItem", this.editItem)

    //head
    this.$bus.$on("pushItem", this.pushItem);

    //foot
    this.$bus.$on("deleteChecked", this.deleteChecked);
    this.$bus.$on("sendCount", this.sendCount);
    this.$bus.$on("saveItem", this.saveItem);
    // this.sendCount()
    this.pubId = pubsub.publish('itemCount', [this.getCount(),this.items.length])
  },

  methods: {
    //item
    itemBlur(id,v){
      this.items.forEach((i) => {
          if(i.id===id){
              i.edit=false
              i.name=v
          }
      });
    },
    checkChange(id,v) {
      this.items.forEach((i) => {
          if(i.id===id){
              i.checked=v
          }
      });
    },
    editItem(id){
      this.items.forEach((i) => {
          if(i.id===id){
              i.edit=true
          }
      });
    },
    saveItem(id, v){
      this.items.forEach((i) => {
          if(i.id===id){
              i.name=v
          }
      });
    },
    deleteItem(id) {
      this.items = this.items.filter((item) => {
        return item.id !== id; //返回items中所有id>3的
      });
    },

    //head
    pushItem(value) {
      this.items.push({
        name: value,
        id: nanoid(),
        checked: false,
        edit: false,
      });
    },
    //foot
    deleteChecked(){
      this.items = this.items.filter((item) => {
        return item.checked === false; //返回items中所有id>3的
      });
    },
    sendCount(){
      this.pubId = pubsub.publish('itemCount', [this.getCount(),this.items.length])
      // console.log('sendCount')
      //   this.$bus.$emit("getSendCount", this.getCount(),this.items.length);
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

<style scoped>


@keyframes come{
    from{
        transform: translateX(-100%);
    }
    to{
      transform: translateX(1%);
    }
}



/* 进入起点 */
.item-enter{
  transition: 1s;
}
/* 进入过程中 */
.item-enter-active{
    animation: come 1s;
}
/* 进入终点 */
.item-enter-to{

}
/* 离开起点 */
.item-leave{

}
/* 离开过程中 */
.item-leave-active{
    animation: come 1s reverse;
}
/* 离开终点 */
.item-leave-to{

}

</style>