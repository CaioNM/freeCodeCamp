function quickCheck(arr, elem) {
    if (arr.indexOf(elem) >= 0) {
    return true;
  }
  return false;
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));