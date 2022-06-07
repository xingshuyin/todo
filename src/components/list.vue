<template>
	<div>
		<div v-for="item in items" :key="item.id">
			<label><input type="checkbox" name="items" id="" v-model="item.checked" />{{ item.item_name }} <button @click="handelDelete(item.id)">删除</button></label>
		</div>
	</div>
</template>

<script>
export default {
	name: "todo-list",
	data() {
		return {};
	},
	methods: {},
	props: ["items", "handelDelete"],
};
</script>
