// Procurando caracteres
  // Quando o sinal "^" é usado dentro de chaves "[^]", ele exclui os caracteres da busca, mas quando é usado fora, pesquisa a palava/simbolo desejado na primeira sentença, mostrano "true" caso a primeira palavra seja a pesquisada e "false" caso nao seja
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;
let result = calRegex.test(rickyAndCal);

console.log(result)