// Praticando a comparação de diferentes valores
  // Resumindo as duas aulas anteriores:
    // [3 == '3'] retorna "true" porque JavaScript faz a conversão de tipo de string para número. [3 === '3'] retorna "false" porque os tipos são diferentes e não é feita a conversão de tipo.
function compareEquality(a, b) {
  if (a === b) { 
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");