<template>
	<div>
		<div v-for="(item, index) in students" :key="index"></div>
	</div>
</template>

<script>
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";
export default {
	computed: {
		...mapState([""]),
		...mapGetters([""]),
	},
	methods: {
		...mapActions([""]),
		...mapMutations([""]),
	},
};
</script>

<style></style>
