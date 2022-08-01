// Definindo globais
let processed = 0;

// Função que divide um numero passado por 5, depois de soma-lo a 3
function processArg(num) {
  return (num + 3) / 5;
}

// É possivel atribuir o valor resultante de uma função a uma variavel, dessa forma:
processed = processArg(7);
