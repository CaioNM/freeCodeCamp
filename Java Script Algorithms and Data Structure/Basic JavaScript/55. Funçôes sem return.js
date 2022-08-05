// Definindo global
let sum = 0;

//Criando função sem return, nesse caso, ele vai alterar o valor da global, mas o resultado da função é "undefined"
function addThree() {
  sum = sum + 3;
}

// Assim como aqui
function addFive(){
  sum+=5;
}

// Executando as funções
addThree();
addFive();

