<template>
	<div>
		<input type="text" @keyup.enter="additem" />
	</div>
</template>

<script>
export default {
	name: "todo-head",
	data() {
		return {};
	},
	methods: {
		additem(e) {
			this.receive(e.target.value);
			e.target.value = "";
			// console.log(item);
		},
	},
	props: ["receive"],
};
</script>
