module.exports = {
	css: {
		loaderOptions: {
			sass: {
				data: `@import "./src/assets/scss/main.scss";`,
			},
		},
	},
	// devServer: {
	// 	proxy: "http://localhost:3000/",
	// },
};
