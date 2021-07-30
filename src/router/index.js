import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";

Vue.use(Router);

export const routes = [
	{
		path: "*",
		redirect: "/",
	},
	{
		path: "*",
		redirect: "/",
	},
	{
		path: "/",
		name: "home",
		component: Home,
	},
];
