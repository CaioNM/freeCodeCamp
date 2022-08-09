const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer está definido como verdadeiro para representar uma resposta de sucesso de um servidor
  let responseFromServer = true;
  if(responseFromServer) {
    resolve("We got the data");
    // Usando o método "Then" paradizer o que será feito caso o resultado seja objetido
    makeServerRequest.then(result =>{
      console.log(result);
    })
  } else {  
    reject("Data not received");
  }
});