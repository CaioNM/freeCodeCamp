// Diferença Estrita
  // Funciona igual a Igualdade Estrita mas, dessa vez, é a diferença
function testStrictNotEqual(val) {
  if (val!==17) {
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);