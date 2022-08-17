// Usando "This"
  // This é usado para referenciar uma propriedade dentro do próprio objeto, não de um exterior
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};

dog.sayLegs();