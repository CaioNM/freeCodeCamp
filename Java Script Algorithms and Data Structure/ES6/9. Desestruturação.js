const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Usando a desestruturação
  // Ela é usada para economizar tempo, atribuindo varios valores a uma variavel de uma so vez, deixando o código mais limpo, dessa forma:
const {today, tomorrow} = HIGH_TEMPERATURES;

console.log(today);
console.log(tomorrow);