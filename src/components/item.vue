<template>
<div>
    <div>
      <label><input type="checkbox" @change="checkChange" :checked="item.checked"/> </label>
      <span v-show="!item.edit">{{ item.name }}</span>
      <input type="text" :value="item.name" v-show="item.edit" @blur="itemBlur" ref="nameInput">
      <button @click="editItem" v-show="!item.edit">编辑</button>
      <button @click="deleteItem">删除</button>         
    </div>

</div>    

</template>

<script>

export default {
    name: 'todo-item',
    data(){
        return {
        //   name: "喝酒",
        //   id: 1,
        //   checked: false,
        //   edit: false,
        // style_a: "come"
        }
    },
    props:['item'],
    methods: {
        itemBlur(e){ //失去焦点
            this.$bus.$emit("itemBlur", this.item.id, e.target.value)
        },
        checkChange(e){
            this.$bus.$emit("checkChange", this.item.id, e.target.checked)
        },
        deleteItem(){
            this.style_a='go'
            this.$bus.$emit("deleteItem", this.item.id)
            
        },
        editItem(){
            this.$bus.$emit("editItem", this.item.id)
            // 上一句执行完输入框并没有出现在页面,因此无法直接聚焦输入框
            this.$nextTick(function(){ //在下一次dom更新后执行
                this.$refs.nameInput.focus()
            })
            
        }
    },
}
</script>
<style scoped>

</style>