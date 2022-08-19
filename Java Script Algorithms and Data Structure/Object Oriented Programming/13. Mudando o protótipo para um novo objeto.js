// Otimizando a escrita de protótipos
  // Uma forma é transforma-los em caracteristicas do objeto
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Dessa forma:
  numLegs: 2,
  eat: function(){
    console.log("pipipipi");
  },
  describe: function(){
    console.log("My name is " + this.name);
  }
};

