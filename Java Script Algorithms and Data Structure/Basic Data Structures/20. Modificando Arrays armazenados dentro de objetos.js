let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // Aqui ele coloca na Key selecionada pelo usuario, no caso, "user"
    // Depois chama a parte "data"
      // Seleciona a parte "friends"
        // E adiciona o Pete
  userObj.data.friends.push(friend);
  return userObj.data.friends
}

console.log(addFriend(user, 'Pete'));