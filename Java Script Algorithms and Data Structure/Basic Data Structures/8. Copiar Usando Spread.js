function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Copiando um array
    newArr.push([...arr])
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));