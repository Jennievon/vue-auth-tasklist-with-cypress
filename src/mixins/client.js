export const mixin = {
	methods: {
		async postData(url = "", data = {}, method) {
			const token = localStorage.getItem("logged_in_user_token");
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
			const response = await fetch(`http://localhost:3000/${url}`, headers);
			const res = await response.json();
			return res;
		},
	},
};
