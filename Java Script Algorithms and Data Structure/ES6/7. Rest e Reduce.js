// Usando rest e reduce para somar n parametros de uma função
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}
