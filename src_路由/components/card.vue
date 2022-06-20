<template>
	<div class="card">
		<h2>{{ card.name }}</h2>
		<!-- 插槽位置 -->
		<!-- 设置插槽名字 -->
		<slot></slot>
		<!-- :cardData="cardData" 定义属性传给插槽使用者,的scope属性 -->
		<slot name="card-body" :cardData="cardData">body</slot><br />
		<slot name="card-foot">foot</slot>
	</div>
</template>
<script>
export default {
	data() {
		return {
			cardData: [1, 2, 3],
		};
	},
	props: ["card"],
};
</script>
<style scoped>
.card {
	width: 100px;
	height: 200px;
	float: left;
	margin: 5px;
	overflow: hidden;
	background-color: blueviolet;
}
.card img {
	width: 100px;
	height: 100px;
}
</style>
