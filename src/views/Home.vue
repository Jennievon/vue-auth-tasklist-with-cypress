<template>
	<div>
		<header>
			<nav>
				<button class="primary" @click="logout">Logout</button>
			</nav>
		</header>
		<TaskList :tasks="tasks"></TaskList>
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
			logout() {
				localStorage.removeItem("logged_in_user_token");
				this.$router.push("/auth/login");
			},
		},
	};
</script>

<style lang="scss" scoped></style>
