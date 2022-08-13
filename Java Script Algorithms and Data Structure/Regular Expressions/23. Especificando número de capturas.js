// Procurando caracteres
  // Especificando o número de ocorrencias
    // Ja foi usado o "*" para procurar por 0 ocorrencias
    // Já foi usado o "+" para procurar por 1 ou mais ocorrencias
      // Agora para especificar, usa-se as chaves "{}", por exemplo:
        // Para procurar a letra "a" de 3 a 5 vezes na string "ah", se faz:
          // "/a{3,5}h", retornando "true" ou "false"
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; 
let result = ohRegex.test(ohStr);

console.log(result)