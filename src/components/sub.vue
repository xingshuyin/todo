<template>
    <div>
        <input type="checkbox" @click="actionemitfun" />
    </div>
</template>

<script>
export default {
    name: "todo-count",
    data() {
        return {
            num: 1
        }
    },
    props: ["fatherfun"],  //通过prop传递父组件的方法给子组件
    methods: {
        actionemitfun() {
            // @subemitfun="emitfun"
            // 就是触发了,父组件的emitfun传入了this.num给这个父组件的函数
            this.$emit('subemitfun', this.num)  // 直接使用父组件创建子组件时创建的自定义事件
            this.$emit('refemitfun', this.num)
            this.fatherfun(this.num)  // 通过prop直接调用父组件方法
            this.$bus.$emit('busemitfun', this.num)  // 通过全局事件总线调用父组件的回调方法并传入参数
        }
    },
};
</script>
<style scoped>
</style>