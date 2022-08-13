// Procurando caracteres
  // Capturando Espaços em brancos
    // Para capturar espaços, basta usar o "\s"
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; 
let result = sample.match(countWhiteSpace);

console.log(result);