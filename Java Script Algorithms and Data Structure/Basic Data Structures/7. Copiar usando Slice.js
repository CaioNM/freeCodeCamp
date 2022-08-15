function forecast(arr) {
  // Usando a função "Slice"
    //O primeiro parametro é onde começa a extração e o segundo é onde acaba
  let weather = arr.slice(2,4);
  return weather;
}

// Altere apenas o código acima desta linha
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));