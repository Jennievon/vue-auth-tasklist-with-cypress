import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

import { mixin } from "./mixins/client.js";
import { routes } from "./router/index.js";
import { store } from "./store/index.js";

// route guard
const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

Vue.config.productionTip = false;

Vue.mixin(mixin);

new Vue({
	el: "#app",
	router,
	store,
	render: (h) => h(App),
});
