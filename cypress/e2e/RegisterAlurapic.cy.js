describe("Register AluraPic", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Check validation messege", () => {
    //CONTAINS - localiza por elemento que está incluido na TAG passada

    cy.contains("a", "Register now").click();
    cy.contains("button", "Register").click();
    cy.contains("ap-vmessage", "Email is required!").should("be.visible");
    cy.contains("button", "Register").click();
    cy.contains("ap-vmessage", "Full name is required!").should("be.visible");
    cy.contains("ap-vmessage", "User name is required!").should("be.visible");
    cy.contains("ap-vmessage", "Password is required!").should("be.visible");
  });

  it("Check invalid email message", () => {
    cy.contains("a", "Register now").click();
    cy.contains("button", "Register").click();
    cy.get('input[formcontrolname="email"]').type("alisson");
    cy.contains("ap-vmessage", "Invalid e-mail").should("be.visible");
  });

  it("Check invalid full name message", () => {
    cy.contains("a", "Register now").click();
    cy.contains("button", "Register").click();
    cy.get('input[formcontrolname="fullName"]').type("a");
    cy.contains("button", "Register").click();
    cy.contains("ap-vmessage", "Mininum length is 2").should("be.visible");
  });

  it("Check invalid user name message", () => {
    cy.contains("a", "Register now").click();
    cy.get('input[formcontrolname="userName"]').type("a");
    cy.contains("button", "Register").click();
    cy.contains("ap-vmessage", "Mininum length is 2").should("be.visible");
  });

  it("Check invalid user name messege if lower case", () => {
    cy.contains("a", "Register now").click();
    cy.get('input[formcontrolname="userName"]').type("AA");
    cy.contains("button", "Register").click();
    cy.contains("ap-vmessage", "Must be lower case").should("be.visible");
  });

  it("Check invalid password messege", () => {
    cy.contains("a", "Register now").click();
    cy.get('input[formcontrolname="password"]').type("123");
    cy.contains("button", "Register").click();
    cy.contains("ap-vmessage", "Mininum length is 8").should("be.visible");
  });

  const users = require("../fixtures/users.json");

//Testando com massa de dados - utilizando a pasta fixtures

  users.forEach((user) => {
    it.only(`register new user ${user.username}`, () => {
      cy.contains('a', 'Register now').click();
      cy.get('input[formcontrolname="email"]').type(user.email);
      cy.get('input[formcontrolname="fullName"]').type(user.fullName);
      cy.get('input[formcontrolname="userName"]').type(user.userName);
      cy.get('input[formcontrolname="password"]').type(user.password);
      cy.contains('button', 'Register').click();
    });
  });
});
