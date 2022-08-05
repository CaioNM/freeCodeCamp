//Criando função
  // Usando "Else"
    // "Else" é a condição que será executada a parte de todos os ifs especificados anteriormente
function testElse(val) {
  let result = "";
  if (val > 5) {
    result = "Bigger than 5";
  }else{
    result = "5 or Smaller";
  }
  return result;
}

testElse(6);