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
    props: ['id', 'id2']
}
</script>

<style  scoped>
.detail {
    background-color: beige;
    margin: 3px;
}
</style>>