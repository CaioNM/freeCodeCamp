const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
  
  let contagem = 0;
  for (let user in usersObj) {
    if (usersObj[user].online == true) {
      contagem++;
    }
  }
  return contagem;
}

console.log(countOnline(users));