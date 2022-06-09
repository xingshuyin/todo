<template>
    <div id="app">
        <!-- 使用自定义属性把父组件方法传给子组件 -->
        <childern :fatherfun="fatherfun" @subemitfun="emitfun"></childern>
        <!-- 使用自定义事件回调父组件的方法 -->
        <childern :fatherfun="fatherfun" @subemitfun="emitfun"></childern>
        <!-- 使用ref获取子组件实例并绑定一个自定义事件,回调父组件函数; 或者回调一个箭头函数里面的this就是子组件 -->
        <childern ref="sub" :fatherfun="fatherfun" @subemitfun="emitfun"></childern>
    </div>
</template>

<script>
    import childern from './sub.vue'
    export default {
        name: "App",
        components: {
            childern
        },
        mounted() {
            console.log(this.$refs)
            // 通过ref获取子组件实例,再通过$on绑定自定义事件
            this.$refs.sub.$on('refemitfun', function (num) {
                console.log('refemitfun', num)
            })
            this.$bus.$on('busemitfun',function (num) {
                console.log('$busemitfun', num)
            })
        },
        methods: {
            fatherfun(num) {
                console.log('fatherfun', num)
            },
            emitfun(num) {
                console.log('emitfun', num)
            }
        },
    };
</script>

<style scoped>
</style>