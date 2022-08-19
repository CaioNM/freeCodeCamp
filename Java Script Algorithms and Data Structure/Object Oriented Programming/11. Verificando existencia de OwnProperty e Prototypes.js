// Verificando existencia de OwnProperty e Prototypes
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Altere apenas o código abaixo desta linha
for (let property in beagle){
  if(beagle.hasOwnProperty(property)){
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

// Vendo as Propriedades do Objeto
console.log(ownProps);
// Verificando os Protótipos
console.log(prototypeProps);