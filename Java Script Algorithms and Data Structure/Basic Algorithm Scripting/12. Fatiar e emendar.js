// Usando Slice e Splice
function frankenSplice(arr1, arr2, n) {
  let novoArray = arr2.slice();
  for (let i=0; i < arr1.length; i++){
    novoArray.splice(n, 0, arr1[i]);
    n++;
  }
  return novoArray;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));