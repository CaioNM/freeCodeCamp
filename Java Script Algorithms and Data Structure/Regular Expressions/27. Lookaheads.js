// Procurando caracteres
  // Lookaheads
    // Procurando coisas a frente
      // (?=...), procura positivamente
      // (?!...), procura negativamente
let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/;
let result = pwRegex.test(sampleWord);

console.log(result)