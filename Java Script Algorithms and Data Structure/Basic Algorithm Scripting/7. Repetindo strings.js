// Repetindo n vezes uma palavra
function repeatStringNumTimes(str, num) {
  let resposta = ''
  for (let i=0; i<num; i++){
    resposta += str
  }
  return resposta;
}

console.log(repeatStringNumTimes("abc", 3));