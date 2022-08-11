// Procurando caracteres
  // Dessa vez, colocando caracteres que eu não quero que estejam
    // Para isso, basta colocar um "^", antes, dessa forma
let quoteSample = "3 blind mice.";
      // Aqui ele não mostrará nenhuma vogal ou número
let myRegex = /[^aeiou0-9]/gi;
let result = quoteSample.match(myRegex); 

console.log(result);