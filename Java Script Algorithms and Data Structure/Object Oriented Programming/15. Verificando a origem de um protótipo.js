// Verificando a origem de um protótipo
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// Dessa forma
Dog.prototype.isPrototypeOf(beagle)