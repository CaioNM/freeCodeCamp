function randomWholeNum() {

  // Gerando números aleatórios inteiros com JavaScript
    // Usando a função "Math.floor" para arredondar o número
      // Gerando números de 0 a 9, para isso, deve multiplicar por 10, ja que ele não é incluso
  const a = Math.floor(Math.random()*10);
  return a;
}

console.log(randomWholeNum());