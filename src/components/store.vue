<template>
	<div>
		<span>{{ num }}</span>
		<span>{{ bignum }}</span>
		<span>{{ name }}</span>
		<select name="" v-model.number="numAdd">
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
		</select>
		<button @click="plus(numAdd)">+</button>
		<button @click="MINUS(numAdd)">-</button>
		<button @click="plus_odd(numAdd)">奇数+</button>
		<button @click="plus_after(numAdd)">延时+</button>
	</div>
</template>
<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
export default {
	name: "store-num",
	data() {
		return {
			numAdd: 1,
		};
	},
	computed: {
		name() {
			return this.$store.plusobj.state.name;
		},
		// ...mapState({name:'name', age:'age', school:'school'})  //生成state计算属性,自定义名字
		...mapState("plusobj", ["num", "name", "age", "school"]), //生成state计算属性, 名称相同,然后就可以直接使用
		...mapGetters("plusobj", ["bignum"]), // gatters计算属性
	},
	methods: {
		// plus() {
		// 	this.$store.dispatch("plus", this.numAdd);
		// },
		// minus() {
		// 	this.$store.dispatch("minus", this.numAdd);
		// },
		// plus_odd() {
		// 	this.$store.dispatch("plusobj", "plus_odd", this.numAdd);
		// },
		// plus_after() {
		// 	this.$store.dispatch("plusobj", "plus_after", this.numAdd);
		// },
		// ...mapMutations({ PLUS: "PLUS", MINUS: "MINUS" }),
		...mapMutations("plusobj", ["PLUS", "MINUS"]), //生成commit方法
		...mapActions("plusobj", ["plus", "minus", "plus_odd", "plus_after"]), //生成dispatch方法
	},
};
</script>
