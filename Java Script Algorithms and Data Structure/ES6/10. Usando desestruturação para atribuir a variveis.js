const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Usando novamente a desestruturação
  // Dessa vez, o valor será atribuido a uma variavel específica, puxando um parametro específico:
const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;

console.log(highToday);
console.log(highTomorrow);

