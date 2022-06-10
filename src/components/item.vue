<template>
  <div>
    <div class="item">
      <!-- <label><input type="checkbox" @change="checkChange" :checked="item.checked"/> </label>
      <span v-show="!item.edit">{{ item.name }}</span>
      <input type="text" :value="item.name" v-show="item.edit" @blur="itemBlur" ref="nameInput">
      <button @click="editItem" v-show="!item.edit">编辑</button>
      <button @click="deleteItem">删除</button>          -->
      <input
        class="check"
        type="checkbox"
        @change="checkChange"
        :checked="item.checked"
      />
      <img class="icon" :src="item.avatar_url" alt="" @click="changeLocation" />

      <button @click="deleteItem" class="deleteBtn">删除</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "todo-item",
  data() {
    return {};
  },
  props: ["item"],
  methods: {
    itemBlur(e) {
      //失去焦点
      this.$bus.$emit("itemBlur", this.item.id, e.target.value);
    },
    checkChange(e) {
      this.$bus.$emit("checkChange", this.item.id, e.target.checked);
    },
    deleteItem() {
      this.style_a = "go";
      this.$bus.$emit("deleteItem", this.item.id);
    },
    editItem() {
      this.$bus.$emit("editItem", this.item.id);
      // 上一句执行完输入框并没有出现在页面,因此无法直接聚焦输入框
      this.$nextTick(function () {
        //在下一次dom更新后执行
        this.$refs.nameInput.focus();
      });
    },
    changeLocation() {
      window.location = this.item.html_url;
    },
  },
};
</script>
<style scoped>
.item {
  position: relative;
  width: 200px;
  height: 200px;
  margin: 0 auto;
}
.icon {
  border-radius: 20%;
  width: 200px;
  height: 200px;
}
.check {
  position: absolute;
  top: 50%;
  border-radius: 50%;
  transform: translate(0, -50%);
}
.deleteBtn {
  border: 0;
  border-radius: 100%;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(0, -50%);
  width: 40px;
  height: 40px;
  background-color: rgb(192, 137, 137);
}
.deleteBtn:hover {
  background-color: brown;
}
</style>