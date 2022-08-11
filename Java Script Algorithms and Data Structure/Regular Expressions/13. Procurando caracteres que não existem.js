// Procurando caracteres
  // Dessa vez, colocando caracteres que não existam, retornando "null"
    // Para isso, basta colocar um "*", antes, dessa forma:
let chewieRegex = /Aa*/; // Altere esta linha


let result = chewieQuote.match(chewieRegex);

console.log(result)