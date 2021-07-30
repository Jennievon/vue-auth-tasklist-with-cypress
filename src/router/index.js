import Vue from "vue";
import Router from "vue-router";

import Home from "../views/Home.vue";

// Auth Routes
import Register from "../views/auth/Register.vue";
import Login from "../views/auth/Login.vue";

Vue.use(Router);

export const routes = [
	{
		path: "*",
		redirect: "/",
	},
	{
		path: "/",
		name: "home",
		component: Home,
	},
	{
		path: "/auth/register",
		name: "register",
		component: Register,
	},
	{
		path: "/auth/login",
		name: "login",
		component: Login,
	},
];
