// Procurando caracteres
  // Especificando o número de ocorrencias
    // Exatamente como os outros, mas dessa vez nao se coloca a vírugula
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; 
let result = timRegex.test(timStr);

console.log(result)