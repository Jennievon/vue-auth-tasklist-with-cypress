<template>
	<li class="tasks__item">
		<button
			:class="className"
			@click.self="$emit('complete')"
			data-cy="single-task"
		>
			{{ task.text }}
		</button>
		<button
			class="tasks__item__remove button alert pull-right"
			@click="$emit('remove')"
			data-cy="remove-single-task-btn"
		>
			<img src="../assets/images/close.svg" alt="close icon" />
		</button>
	</li>
</template>

<script>
	export default {
		props: ["task"],
		computed: {
			className() {
				let classes = ["tasks__item__toggle"];
				if (this.task.completed) {
					classes.push("tasks__item__toggle--completed");
				}
				return classes.join(" ");
			},
		},
	};
</script>

<style lang="scss" scoped>
	.tasks__item {
		margin-bottom: 0.5em;
		position: relative;
	}

	.tasks__item__toggle {
		cursor: pointer;
		width: 100%;
		text-align: left;
		padding: 0.85em 2.25em 0.85em 1em;
		background-color: rgba(black, 0.05);
		border: 1px solid rgba(black, 0.1);
	}

	.tasks__item__toggle:hover {
		background-color: rgba(black, 0.1);
		border-color: rgba(black, 0.15);
	}

	.tasks__item__toggle--completed {
		text-decoration: line-through;
		background-color: rgba(green, 0.15);
		border-color: rgba(green, 0.2);
	}

	.tasks__item__toggle--completed:hover {
		background-color: rgba(green, 0.25);
		border-color: rgba(green, 0.3);
	}

	.tasks__item__remove {
		position: absolute;
		height: 100%;
		top: 50%;
		right: 0;
		transform: translateY(-50%);
		padding: 1px 6px;
	}

	.tasks__item__remove i {
		vertical-align: middle;
	}
</style>
