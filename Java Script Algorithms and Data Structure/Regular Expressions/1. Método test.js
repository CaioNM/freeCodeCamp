// Expressoes regulares
 // Usando expressoes regulares para achar uma palavra dentro de uma frase
  // usando o método TEST
    // Para descobrir, basta criar outra variavel com a palavra desejada entre '/', dessa forma:
let myString = "Hello, World!";
let myRegex = /Hello/;

// Essa é a sintax, a variavel criada com a palavra que deve ser achada, o método "test" e a variavel da frase entre os parenteses. Isso retornará True or False
let result = myRegex.test(myString);