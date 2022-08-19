// Entendendo "Own Properties"
  // Isso pode ser usado para verificar os atributos de um objeto
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Dessa forma:
for(let property in canary){
  if(canary.hasOwnProperty(property)){
    ownProps.push(property);
  }
}

// Vai retornar as propriedades de "Bird" herdadas por "canary"
  // No caso "name" e "numLegs"
console.log(ownProps)