// Calculando fatoriais
function factorialize(num) {
  let total = 1;
  for (let i = num; i>=1; i--){
    total = total * i;
  }
  return total;
}

console.log(factorialize(3));