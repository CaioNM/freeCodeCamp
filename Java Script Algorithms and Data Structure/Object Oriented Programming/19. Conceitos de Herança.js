// Conceitos de Herança
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Atribuindo todas as caracteristicas de "Animal" para "Dog"
Dog.prototype = Object.create(Animal.prototype)

let beagle = new Dog();
beagle.eat()