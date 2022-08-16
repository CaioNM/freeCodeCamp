// Achando a maior palavra
function findLongestWordLength(str) {
  // Separando as palavras da frase
    // Se deixar com espaço, ele separa por palavras
      // Se deixar sem espaço, é por caracter, inclusive espaços
  let palavras = str.split(' ');
  let maior = 0;

  // Laço vai percorrer a frase ate o final
  for (let i = 0; i < palavras.length; i++) {
    // Se uma palavra ("i" representa cada uma como elemento), for maior que o valor de "maior"
    if (palavras[i].length > maior) {
      // Vai atribuir o tamanho a maior
      maior = palavras[i].length;
    }
  }

  return maior;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
