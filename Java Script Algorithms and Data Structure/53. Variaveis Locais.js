function myLocalScope() {
  // Aqui criei uma variavel local
  var myVar = "Caio";
  console.log('inside myLocalScope', myVar);
}

//Dito isso, aqui será poss´vel imprimir e reconhecer a variavel
myLocalScope();

// Mas aqui vai dizer que a variavel não foi definida
// myVar não está definida fora do myLocalScope
console.log('outside myLocalScope', myVar);