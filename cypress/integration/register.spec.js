describe("Registration Page", () => {
	beforeEach(() => {
		cy.visit("http://localhost:8080/auth/register");
	});

	it("register user", () => {
		cy.get("[data-cy=registration-email]").type("jay@mail.com");
		cy.get("[data-cy=registration-password]").type(123456);
		cy.get("[data-cy=registration-form]").submit();
	});
});
