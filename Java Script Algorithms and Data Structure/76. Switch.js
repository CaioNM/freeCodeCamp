//Aprendendo a usar o Switch
function caseInSwitch(val) {
  let answer = "";
  // Nesse caso, como são ints, se colocar entre aspas, ele nao funciona
  switch(val){
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }
  return answer;
}

console.log(caseInSwitch(3));