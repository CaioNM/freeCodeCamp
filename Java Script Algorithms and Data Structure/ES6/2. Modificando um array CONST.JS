const s = [5, 7, 2];
function editInPlace() {
  // Alterando o array de uma variavel "const"
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
  return s;
}
console.log(editInPlace());