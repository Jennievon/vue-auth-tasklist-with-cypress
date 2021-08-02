let token;

describe("Index Page", () => {
	// it("user can register", () => {
	// 	cy.visit("/auth/register");
	// 	cy.get("[data-cy=registration-email]").type("newuser@mail.com");
	// 	cy.get("[data-cy=registration-password]").type(123456);
	// 	cy.get("[data-cy=registration-form]").submit();
	// });

	it("user can login", () => {
		cy.visit("/auth/login");
		cy.get("[data-cy=login-email]").type("yveey@nate.com");
		cy.get("[data-cy=login-password]").type(123456);
		cy.get("[data-cy=login-form]").submit();

		// cy.request({
		// 	method: "POST",
		// 	url: "http://localhost:3000/users/login",
		// 	headers: {
		// 		"Content-Type": "application/json",
		// 	},
		// 	body: JSON.stringify({
		// 		email: "yveey@nate.com",
		// 		password: "123456",
		// 	}),
		// }).as("login");

		// cy.get("@login").should((res) => {
		// 	token = res.body.token;
		// });
	});

	it("should be able to see the index page", () => {
		cy.url().should("include", "/todos");
		cy.get("[data-cy=index-title]").should("contain", "Tasks");
	});

	it("should be able clear completed tasks", () => {
		cy.get("[data-cy=clear-completed-tasks-btn]").click();
	});

	it("should be able clear all tasks", () => {
		cy.get("[data-cy=clear-all-tasks-btn]").click();
	});

	// it("disabled button", () => {
	// 	cy.get("[data-cy=clear-all-tasks-btn]").click();
	// });
});
