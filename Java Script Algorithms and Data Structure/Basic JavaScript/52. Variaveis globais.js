// Criando uma variavel global:
  // Variáveis que são definidas fora de um bloco de função são Globais
let myGlobal = 10;

function fun1() {
  // Mesmo que esteja dentro de uma função, variaveis criadas sem o "var" antes, serão globais:
  oopsGlobal = 5;
}

// Chamando as variaveis globais:
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}