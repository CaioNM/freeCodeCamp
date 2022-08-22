function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Criando novos objetos usando o método "Object.create"
let duck = Object.create(Animal.prototype); 
let beagle = Object.create(Animal.prototype); 

