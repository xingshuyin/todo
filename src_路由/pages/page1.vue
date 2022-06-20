<template>
    <div>
        <h2>page1</h2>
        <router-link to="/page1/message1">message1</router-link>
        <router-link to="/page1/message2">message2</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'page-1'
}
</script>

<style>
</style>