export const mixin = {
	methods: {
		async postData(url = "", data = {}, method, auth) {
			const token = auth || localStorage.getItem("logged_in_user_token");
			let headers = {
				method: method,
				mode: "cors",
				cache: "no-cache",
				credentials: "same-origin",
				headers: {
					"Content-Type": "application/json",
					"x-auth": token,
				},
				redirect: "follow",
				referrerPolicy: "no-referrer",
			};
			if (method === "POST") {
				headers["body"] = JSON.stringify(data);
			}
			const response = await fetch(
				`https://node-rest-todo-api.herokuapp.com/${url}`,
				headers,
			);
			const res = await response.json();
			return res;
		},
	},
};
