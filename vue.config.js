module.exports = {
	css: {
		loaderOptions: {
			sass: {
				data: `@import "./src/assets/scss/main.scss";`,
			},
		},
	},
	devServer: {
		proxy: "https://api-nodejs-todolist.herokuapp.com/",
	},
};
