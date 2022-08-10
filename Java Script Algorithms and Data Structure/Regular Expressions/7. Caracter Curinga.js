//Colocando um cacter coringa para puxar todas as palavras com essa ocorrencia
  // deve-se colocar um ponto pra achar
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /un./g;
let result = unRegex.test(exampleStr);