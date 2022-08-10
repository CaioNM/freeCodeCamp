// Puxando mais de uma ocorrencia e ignorando o caseSensitive
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; 
let result = twinkleStar.match(starRegex);