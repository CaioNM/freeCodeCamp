// Achando o maior número num conjunto de arrays
function largestOfFour(arr) {
  const resultado = [];
  // Percorrendo o array externo
  for (let i = 0; i < arr.length; i++){
    let maior = arr[i][0];
    // Percorrendo os internos
    for (let j = 1; j < arr[i].length; j++){
      // Definindo o maior de cada interno
      if (arr[i][j] > maior){
      maior = arr[i][j];
      }
    }
    // Integrando ao resultado definido
    resultado[i] = maior
  }
  return resultado;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));