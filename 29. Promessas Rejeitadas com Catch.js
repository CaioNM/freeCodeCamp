const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer está definido como falso para representar uma resposta sem sucesso de um servidor
  let responseFromServer = false;

  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
    // O método "catch" é similar ao "then", mas, usado quando da erro na promesa, nesse caso, o erro será exibido no console
    makeServerRequest.catch(error => {
      console.log(error)
    })
  }
});

makeServerRequest.then(result => {
  console.log(result);
});