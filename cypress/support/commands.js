Cypress.Commands.add('login',(nome,senha) =>{

    cy.get('input[formcontrolname="userName"]').type(nome)
    cy.get('input[formcontrolname="passwo rd"]').type(senha)
    cy.get('button[type="submit"]').click()

})