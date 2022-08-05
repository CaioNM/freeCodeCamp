const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

//Acessando uma propriedade dentro de varias propriedades
const gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);