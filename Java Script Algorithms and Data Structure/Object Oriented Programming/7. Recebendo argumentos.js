// Adaptando metodos construtores para receber argumentos
function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}

// Criando novos parametros
let terrier = new Dog('Nala', "White/Brown")
console.log(terrier)