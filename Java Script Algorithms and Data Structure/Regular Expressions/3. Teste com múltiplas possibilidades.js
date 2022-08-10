let petString = "James has a pet cat.";
// Procurando multiplas coisas na frase
let petRegex = /dog|cat|bird|fish/; 
let result = petRegex.test(petString);

console.log(result)