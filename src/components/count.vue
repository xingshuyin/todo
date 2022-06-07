<template>
	<div>
		<div><input type="checkbox" name="" id="" @change="checkAll" /> {{ checkCount }}/{{ items.length }} <button @click="deleteChecked">删除已完成</button></div>
	</div>
</template>

<script>
export default {
	name: "todo-count",
	props: ["items", "deleteChecked", "checkAll"],
	computed: {
		checkCount() {
			return this.items.reduce((pre, current) => {
				if (current.checked) {
					return pre + 1;
				}
				return pre;
			}, 0);
		},
	},
	methods: {},
};
</script>
