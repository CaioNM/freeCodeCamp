function titleCase(str) {
  const texto = str.split(" ");
  const novo = [];
  for (let i in texto) {
    novo[i] = texto[i][0].toUpperCase() + texto[i].slice(1).toLowerCase();
  }
  return novo.join(" ");
}

console.log(titleCase("I'm a little tea pot"));