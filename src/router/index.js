import Vue from "vue";
import Router from "vue-router";
import { store } from "../store/index.js";

import Home from "../views/Home.vue";

// Auth Routes
import Register from "../views/auth/Register.vue";
import Login from "../views/auth/Login.vue";

Vue.use(Router);

const ifNotAuthenticated = (to, from, next) => {
	if (!store.getters.isAuthenticated) {
		next();
		return;
	}
	next("/");
};

const ifAuthenticated = (to, from, next) => {
	if (store.getters.isAuthenticated) {
		next();
		return;
	}
	next("/auth/login");
};

export const routes = [
	{
		path: "*",
		redirect: "/todos",
	},
	{
		path: "/todos",
		name: "home",
		component: Home,
		// beforeEnter: ifAuthenticated,
	},
	{
		path: "/auth/register",
		name: "register",
		component: Register,
		beforeEnter: ifNotAuthenticated,
	},
	{
		path: "/auth/login",
		name: "login",
		component: Login,
		beforeEnter: ifNotAuthenticated,
	},
];
