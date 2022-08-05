var size
function testSize(num) {
  if(num < 5){
    size = "Tiny";
  } else if (num < 10){
    size = "Small";
  } else if (num < 15){
    size = "Medium";
  } else if (num <20){
    size = "Large";
  } else {
    size = "Huge";
  }
  return size;
  return "Change Me";
}

console.log(testSize(7));