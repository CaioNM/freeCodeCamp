let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// Modificando objetos dentro de outros objetos
userActivity.data.online = 45

console.log(userActivity);