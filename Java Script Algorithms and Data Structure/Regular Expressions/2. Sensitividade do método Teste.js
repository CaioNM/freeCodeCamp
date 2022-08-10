// Essa forma de procurar as palavras, por enquanto, é case sensitive, ou seja, so vai retornar true se a palava estiver escrita exatamente como na frase
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/;
let result = waldoRegex.test(waldoIsHiding);