// Evitando propriedades duplicadas
  // Para isso, usa-se o protótipo, passando uma certa propriedade para todos os objetos criados
function Dog(name) {
  this.name = name;
  Dog.prototype.numLegs = 4
}

let beagle = new Dog("Snoopy");
// Verificando número de pernas 
console.log(beagle.numLegs)