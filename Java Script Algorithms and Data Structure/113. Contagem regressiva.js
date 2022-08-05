
function countdown(n){
  if (n<=0){
    return [];
  }else{
    const countArray = countdown(n-1);
    // Aqui nao pode ser push pq ele vai colocar o proximo número no final da lista, fazendo a contagem crescente nesse caso, se usa o unshift pq ele coloca no começo
    countArray.unshift(n);
    return countArray;
  }
}

console.log(countdown(15))