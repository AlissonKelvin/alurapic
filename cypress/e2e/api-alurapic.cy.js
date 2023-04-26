describe("fetch photos and data", () => {
  it("fetch photos", () => {
    cy.request({
      methods: "GET",
      url: "https://alura-fotos.herokuapp.com/flavio",
    }).then((res) => {
      expect(res.status).to.be.equal(200);
      expect(res.body).is.not.empty;
      expect(res.body[0]).to.have.property("description");
      expect(res.body[0].description).to.be.equal("Farol iluminado");
    });
  });

  it("fetch photos", () => {
    cy.request({
      methods: "GET",
      url: "https://alura-fotos.herokuapp.com/flavio",
      body: Cypress.env(),
    }).then((res) => {
      expect(res.status).to.be.equal(200);
      expect(res.body).is.not.empty;
      expect(res.body).to.have.property("id");
      expect(res.body).to.be.equal(1);
      expect(res.body).to.have.property("email");
      expect(res.body.email).to.be.equal("flavio@alurapic.com.br");
    });
  });
});
