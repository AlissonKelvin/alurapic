const { defineConfig } = require("cypress");

//Configurando uma URL base de acesso
module.exports = defineConfig({
  e2e: {
   
    baseUrl:'https://alura-fotos.herokuapp.com/'

  },
});
