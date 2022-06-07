<template>
	<div id="app">
		<TodoHead :receive="receive"></TodoHead>
		<TodoList :items="items" :handelDelete="handelDelete"></TodoList>
		<TodoCount :items="items" :deleteChecked="deleteChecked" :checkAll="checkAll"></TodoCount>
	</div>
</template>

<script>
import TodoHead from "./components/head.vue";
import TodoList from "./components/list.vue";
import TodoCount from "./components/count.vue";
import { nanoid } from "nanoid";
export default {
	name: "App",
	components: {
		TodoHead,
		TodoList,
		TodoCount,
	},
	beforeMount() {
		console.log(window.localStorage.getItem("items"));
		console.log(this.items);
		if (window.localStorage.getItem("items")) {
			this.items = JSON.parse(window.localStorage.getItem("items")); // 本地信息读取
			// this.items = JSON.parse(window.sessionStorage.getItem("items"));  // session信息读取
		}
	},
	data() {
		return {
			items: [
				{
					id: "1",
					item_name: "打游戏",
					checked: true,
				},
				{
					id: "2",
					item_name: "看电影",
					checked: false,
				},
				{
					id: "3",
					item_name: "吃饭",
					checked: false,
				},
			],
		};
	},
	watch: {
		items: {
			handler(value) {
				window.localStorage.setItem("items", JSON.stringify(value)); // 本地信息存储
				// window.sessionStorage.setItem("items", JSON.stringify(this.items));  // session信息存储,关闭浏览器会消失
			},
			deep: true,
		},
	},
	methods: {
		receive(item_name) {
			const item = {
				id: nanoid(),
				item_name: item_name,
				checked: false,
			};
			this.items.push(item);
		},
		handelDelete(item_id) {
			console.log(item_id);
			this.items = this.items.filter((item) => {
				return item.id !== item_id;
			});
		},
		deleteChecked() {
			this.items = this.items.filter((item) => {
				return item.checked === false;
			});
		},
		checkAll(e) {
			this.items.forEach((i) => {
				i.checked = e.target.checked;
			});
		},
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
