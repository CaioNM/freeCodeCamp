// Procurando caracteres
  // Especificando o número mínimo de ocorrencias
    // Mesma coisa da anterior, mas nao se coloca o máximo
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/;
let result = haRegex.test(haStr);

console.log(result)