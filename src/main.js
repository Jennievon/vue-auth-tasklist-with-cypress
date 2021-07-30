import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

import { routes } from "./router/index.js";

// route guard
const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

Vue.config.productionTip = false;

new Vue({
	el: "#app",
	router: router,
	render: (h) => h(App),
});
