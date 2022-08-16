// Imprimindo so até o numero especificado
function truncateString(str, num) {
  if (str.length>num){
    // Começando no 0 e terminando no número fornecido
    return str.slice(0, num) + "...";
  }
  return str;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));