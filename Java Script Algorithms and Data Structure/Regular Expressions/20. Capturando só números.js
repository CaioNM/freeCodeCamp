// Dessa vez, mostrando só números:
  // Para isso, usa-se "\d"
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; 
let result = movieName.match(numRegex).length;