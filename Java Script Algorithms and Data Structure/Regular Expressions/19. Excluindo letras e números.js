// Usar "\W" (Com "w" maiusculo), mostra tudo o que não é número ou letra
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; 
let result = quoteSample.match(nonAlphabetRegex).length;