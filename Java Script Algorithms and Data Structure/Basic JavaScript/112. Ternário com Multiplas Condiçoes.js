// Ternários com multiplas condiçoes, primeiro if, depois else if e por ultimo else
function checkSign(num) {
  return (num<0)? "negative": (num==0)? "zero": "positive";
}

checkSign(10);