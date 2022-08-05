//Criando um contador de valor de cartas de BlackJack
  // Criando variaveis
let count = 0;
let result = '';

function cc(card) {
  // Trocando os valores de 2 a 6 para +1 no placar
  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count+=1;
      break;
  }
  // Nada é somado quando o valor da carta é de 7 a 9:
  switch(card){
    case 7:
    case 8:
    case 9:
      count +=0;
      break;
  }
  // Cartas maiores ou 10 perdem 1 ponto
  switch(card){
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count -=1;
      break;
  }
  // Criando a condicional para apostar ou segurar
  if (count>0){
    result = 'Bet';
  }else{
    result = 'Hold';
  }

  return count + ' ' + result;
}

console.log(cc(2), cc(3), cc(7), cc('K'), cc('A'));
 