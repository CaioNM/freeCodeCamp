function htmlColorNames(arr) {
  // Usando Splice pra adicionar itens por meio do terceiro parametro
  arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond');
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));