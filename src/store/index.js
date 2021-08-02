import Vue from "vue";
import Vuex from "vuex";
import { mixin } from "../mixins/client";

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		token: localStorage.getItem("logged_in_user_token"),
		tasks: [],
	},

	mutations: {
		SET_TASKS(state, tasks) {
			state.tasks = tasks;
		},
	},

	getters: {
		isAuthenticated: (state) => state.token,
		tasks: (state) => state.tasks,
	},

	actions: {
		async getTodos({ commit }) {
			console.log(localStorage.getItem("logged_in_user_token"), "tkn");
			const response = await mixin.methods.postData(
				"todos",
				{},
				"GET",
				localStorage.getItem("logged_in_user_token"),
			);
			commit("SET_TASKS", response.todos);
		},
	},
});
