<template>
	<div class="card">
		<div>
			<h2>Login</h2>
		</div>
		<form @submit.prevent="login">
			<div class="input">
				<Input
					:id="'email'"
					:placeholder="'Enter your email'"
					:type="'email'"
					:label="'Email Address'"
					:name="'email'"
					:required="'true'"
					:value="email.value"
					@vchange="email.value = $event"
				/>
			</div>
			<div class="input">
				<Input
					:id="'password'"
					:placeholder="'Enter your password'"
					:type="'password'"
					:label="'Password'"
					:name="'password'"
					:required="'true'"
					:value="password.value"
					@vchange="password.value = $event"
				/>
			</div>
			<div class="button-wrapper">
				<button
					class="primary has-icon icon-right"
					type="submit"
					:disabled="submitting"
				>
					Register
				</button>
			</div>
		</form>
	</div>
</template>

<script>
	import Input from "../../components/Input.vue";
	export default {
		components: {
			Input,
		},
		data() {
			return {
				email: { value: "" },
				password: { value: "" },
				submitting: false,
			};
		},
		methods: {
			async login() {
				this.submitting = true;
				try {
					let url = "users/login";
					let data = {
						email: this.email.value,
						password: this.password.value,
					};
					const response = await this.postData(url, data, "POST");
					this.submitting = false;
					localStorage.setItem("logged_in_user_token", response.token);
					this.$router.push("/");
				} catch (error) {
					this.submitting = false;
				}
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import "../../assets/scss/mixins";
	.light-bg {
		background: var(--color-light-primary);
	}

	.card {
		margin-top: 50px;
		@include desktop {
			width: 650px;
			margin-left: auto;
			margin-right: auto;
		}
	}

	form {
		margin-top: 24px;

		.input {
			margin-bottom: 16px;
		}
		.button-wrapper {
			display: flex;
			justify-content: flex-end;
		}
	}
</style>
