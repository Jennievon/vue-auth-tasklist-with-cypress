describe("Registration Page", () => {
	beforeEach(() => {
		cy.visit("http://localhost:8080/auth/login");
	});

	it("register user", () => {
		cy.get("[data-cy=login-email]").type("jay@mail.com");
		cy.get("[data-cy=login-password]").type(123456);
		cy.get("[data-cy=login-form]").submit();
	});
});
