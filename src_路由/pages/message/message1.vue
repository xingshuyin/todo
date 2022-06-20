<template>
    <div>
        <span v-for="d in details" :key="d.id">
            <!-- 跳转路由添加query参数 -->

            <router-link replace :to="`/page1/message1/detail?id=${d.id}`">query {{ d.detail }}</router-link>
        </span>
        <hr>
        <span v-for="d in details" :key="d.id">
            <!-- 跳转路由添加query参数 对象写法 -->
            <router-link :to="{
                name: 'detail', //通过name绑定路径
                // path: '/page1/message1/detail',  //通过path绑定路由
                query: { id2: d.id },
                params: {  //路径参数,必须用name, 参数必须先再router中声明
                    id: d.id + 10
                }
            }">dict {{ d.detail }}</router-link>
        </span>

        <!-- 缓存组件, :include=["组件名",] ; include="组件名" -->
        <keep-alive :include="['detial']">
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
export default {
    name: 'message-1',
    data() {
        return {
            details: [
                {
                    id: 1,
                    detail: 'detail1'
                }, {
                    id: 2,
                    detail: 'detail2'
                }, {
                    id: 3,
                    detail: 'detail3'
                },
            ]
        }
    },
    activated() {  //路由激活时执行

    },
    deactivated() {  //路由切换时执行

    }
}
</script>

<style>
</style>