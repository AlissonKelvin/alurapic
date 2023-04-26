describe("Home page", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Must access Alura ", () => {
    cy.contains("h4", "Login");
  });

  it("Login with valid user", () => {
    cy.login("flavio", "123");
    cy.contains("a", "(Logout)").should("be.visible");
  });

  it("Login with invalid user", () => {
    cy.login("alisson", "123456");
    cy.on("window.alert", (str) => {
      expect(str).to.squal("Invalid user name or password");
    });
  });
});
