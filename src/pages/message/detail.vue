<template>
    <div class="detail">
        {{ id }} <br>
        {{ id2 }}
    </div>
</template>
<!-- ------------------------------------------------ -->
<script>
export default {
    mounted() {
        console.log(this.$route.query.id)
        console.log(this.$route.params.id)
    },
    props: ['id', 'id2'],
    // 组件内守卫
    beforeRouteEnter(to, from, next) {
        // 通过路由router - link进入组件时调用
        console.log(to, from)
        next()
    },
    beforeRouteLeave(to, from) {
        // 通过路由router - link离开组件时调用
        console.log(to, from)
    }
}
</script>

<style  scoped>
.detail {
    background-color: beige;
    margin: 3px;
}
</style>>