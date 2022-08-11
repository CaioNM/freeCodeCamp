// Procurando caracteres
  // Dessa vez, procurando caracteres repetidos
    // Para isso, basta colocar um "+" depois, dessa forma:
let difficultSpelling = "Mississippi";
let myRegex = /s+/gi; 
let result = difficultSpelling.match(myRegex);

console.log(result)