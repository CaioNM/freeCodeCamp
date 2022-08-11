// Procurando caracteres
  // Do mesmo modo que "^", quando usado fora de chaves pesquisa a primeira palava/simbolo sentença, o caracter "$" após o que será pesquisado, pesquisa pela última palavra na sentença, mostrando "true" caso a primeira palavra seja a pesquisada e "false" caso nao seja
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; 
let result = lastRegex.test(caboose);

console.log(result)