<template>
	<div>
		<div>
			<div id="app">
				<TaskList :tasks="tasks"></TaskList>
			</div>
		</div>
	</div>
</template>

<script>
	import TaskList from "../components/TaskList.vue";
	import { mapGetters } from "vuex";
	export default {
		components: { TaskList },
		computed: {
			...mapGetters(["tasks"]),
			className() {
				let classes = ["tasks__item__toggle"];
				if (this.task.completed) {
					classes.push("tasks__item__toggle--completed");
				}
				return classes.join(" ");
			},
		},
		mounted() {
			this.getTodos();
		},
		methods: {
			async getTodos() {
				await this.$store.dispatch("getTodos");
			},
		},
	};
</script>

<style lang="scss" scoped></style>
