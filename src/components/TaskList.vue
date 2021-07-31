<template>
	<section class="tasks">
		<h1>
			Tasks
			<transition name="fade">
				<small v-if="incomplete">({{ incomplete }})</small>
			</transition>
		</h1>
		<div class="tasks__new input-group">
			<input
				type="text"
				class="input-group-field"
				v-model="newTask"
				@keyup.enter="addTask"
				placeholder="New task"
			/>
			<span class="input-group-button">
				<button @click="addTask" class="button primary">
					<img src="../assets/images/add.svg" alt="add icon" /> Add
				</button>
			</span>
		</div>

		<div class="tasks__clear button-right">
			<button class="button warning small" @click="clearCompleted">
				<img src="../assets/images/complete.svg" alt="complete icon" /> Clear
				Completed
			</button>
			<button class="button danger small" @click="clearAll">
				<img src="../assets/images/delete.svg" alt="delete icon" /> Clear All
			</button>
		</div>

		<transition-group name="fade" tag="ul" class="tasks__list no-bullet">
			<TaskItem
				v-for="task in tasks"
				@remove="removeTask(task)"
				@complete="completeTask(task)"
				:task="task"
				:key="task.text"
			></TaskItem>
		</transition-group>
	</section>
</template>

<script>
	import TaskItem from "../components/TaskItem.vue";
	export default {
		components: { TaskItem },
		props: ["tasks"],
		data() {
			return {
				newTask: "",
			};
		},
		computed: {
			incomplete() {
				return this.tasks?.filter(this.inProgress).length;
			},
		},
		methods: {
			async addTask() {
				let url = "todos";
				let data = {
					text: this.newTask,
				};
				await this.postData(url, data, "POST");
				await this.$store.dispatch("getTodos");
				this.newTask = "";
			},
			completeTask(task) {
				task.completed = !task.completed;
			},
			async removeTask(task) {
				let url = `todos/${task._id}`;
				await this.postData(url, {}, "DELETE");
				await this.$store.dispatch("getTodos");
			},
			clearCompleted() {
				this.tasks = this.tasks?.filter(this.inProgress);
			},
			clearAll() {
				this.tasks = [];
			},

			inProgress(task) {
				return !this.isCompleted(task);
			},
			isCompleted(task) {
				return task.completed;
			},
		},
	};
</script>

<style lang="scss" scoped>
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.5s;
	}

	.fade-enter,
	.fade-leave-active {
		opacity: 0;
	}

	.input-group {
		input {
			width: 100%;
		}
	}

	.tasks {
		width: 100%;
		max-width: 45rem;
		padding: 1em;
		margin: 1em auto;
		overflow: auto;
		background-color: white;
		box-shadow: 0px 0.25rem 1rem rgba(black, 0.25);

		h1 {
			margin-bottom: 10px;
		}

		.tasks__new {
			display: flex;
		}
	}

	.tasks__list {
		clear: both;
	}

	button {
		display: flex;
		align-items: center;
		img {
			margin-right: 6px;
		}
	}

	.button-right {
		display: flex;
		justify-content: flex-end;
		margin: 20px 0;

		button:first-child {
			margin-right: 10px;
		}
	}
</style>
