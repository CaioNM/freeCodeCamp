// Criar um protópio manualmente apaga a propriedade construtora
  // Para evitar isso, devemos lembrar sempre de definir a propriedade "constructor"
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Dessa forma:
  constructor: Dog,
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};