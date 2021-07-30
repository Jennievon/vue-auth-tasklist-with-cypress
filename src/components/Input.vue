<template>
	<div class="input full-50">
		<label :for="id">
			{{ label }}
			<span v-if="required">*</span>
		</label>
		<input
			v-model="vm_data"
			:id="id"
			:name="name"
			:type="type"
			:placeholder="placeholder"
			:value="value"
			:required="required ? true : false"
			@keyup="inputChanged($event)"
		/>
	</div>
</template>
<script>
	export default {
		props: [
			"placeholder",
			"type",
			"id",
			"name",
			"label",
			"required",
			"v_model",
			"value",
			"salaryExpectation",
		],
		data() {
			return { vm_data: this.value ? this.value : "" };
		},
		watch: {
			value: function(data) {
				this.vm_data = data;
			},
		},
		methods: {
			inputChanged(e) {
				this.$emit("vchange", this.vm_data);
			},
		},
	};
</script>
<style lang="scss" scoped>
	label {
		span {
			color: red;
			font-size: 14px;
		}
	}
</style>
