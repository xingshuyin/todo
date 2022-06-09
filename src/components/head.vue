<template>
    <div>
        <input type="text" @keyup.enter="pushItem">
    </div>
</template>
<script>
export default {
    name:'todo-head',
    methods: {
        pushItem(e){
            this.$bus.$emit("pushItem", e.target.value)
        }
    },
}
</script>