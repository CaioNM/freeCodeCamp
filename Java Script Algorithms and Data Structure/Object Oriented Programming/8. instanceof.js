// Operador "instanceof"
  // Este operador permite que você compare um objeto a um construtor, retornando true ou false caso seja ou não um objeto criado pelo construtor.
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Criando nova instancia
let myHouse = new House(2);

// Verificando:
  // Deve retornar "true"
console.log(myHouse instanceof House);