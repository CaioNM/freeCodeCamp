// Declarando variavel global
const outerWear = "T-Shirt";

function myOutfit() {
  // É possível declarar variaveis globais e locais com o mesmo nome
  const outerWear = "sweater";
  return outerWear;
}

// Nesse caso, será impresso o valor da versão da função pois o valor da variavel local  está presente
myOutfit();