function chunkArrayInGroups(arr, size) {
  let lista = [];
  for (let i = 0; i < arr.length; i += size) {
    lista.push(arr.slice(i, i + size));
  }
  return lista;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));