// Procurando caracteres
  // Capturando Tudo o que NÃO seja espaço em branco
    // Para isso, basta usar o "\S" com "S" maiúsculo
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g;
let result = sample.match(countNonWhiteSpace);

console.log(result)