// Declaração literal de objetos de forma que não precise repetir o nome
const createPerson = (name, age, gender) => {
  return ({name, age, gender});
};