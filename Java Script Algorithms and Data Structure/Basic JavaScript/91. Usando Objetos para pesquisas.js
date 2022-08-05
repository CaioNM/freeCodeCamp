// Configuração
function phoneticLookup(val) {
  let result = "";

  // Tocando switchs por objetos/dicionarios
  var lookup = {
    'alpha': 'Adams',
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  }
  result = lookup[val]
  return result;
}

console.log(phoneticLookup("charlie"));
