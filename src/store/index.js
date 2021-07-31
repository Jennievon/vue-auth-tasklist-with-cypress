import Vue from "vue";
import Vuex from "vuex";
import { mixin } from "../mixins/client";
Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		id: localStorage.getItem("logged_in_user_token"),
		tasks: [],
	},

	mutations: {
		SET_TASKS(state, tasks) {
			state.tasks = tasks;
		},
	},

	getters: {
		isAuthenticated: (state) => state.id,
		tasks: (state) => state.tasks,
	},

	actions: {
		async getTodos({ commit }) {
			const response = await mixin.methods.postData("todos", {}, "GET");
			commit("SET_TASKS", response.todos);
		},
	},
});
