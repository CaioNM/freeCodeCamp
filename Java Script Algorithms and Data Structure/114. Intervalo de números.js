function rangeOfNumbers(startNum, endNum) {
  if(startNum>endNum){
  return [];
  }else{
    var lista = rangeOfNumbers(startNum, endNum -1);
    lista.push(endNum);
    return lista;
  }
};

console.log(rangeOfNumbers(1, 5))