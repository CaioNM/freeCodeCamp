// Definindo um valor padrão para um parâmetro
  // Definindo o valor padrão de "1", caso nada seja inserido
const increment = (number,value = 1) => number + value;

console.log(increment(6))