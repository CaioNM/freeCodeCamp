//Aprendendo a usar o "switch default"
  // É uma condiçao do switch caso nenhuma corresponda, tipo um else
function switchOfStuff(val) {
  let answer = "";
  switch(val){
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;
  }
  return answer;
}

console.log(switchOfStuff());