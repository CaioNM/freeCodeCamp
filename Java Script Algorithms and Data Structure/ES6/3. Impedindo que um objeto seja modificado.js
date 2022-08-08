function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Usando o metodo "Object.freeze" para congelar uma constante
    // Esse método previne que a varaivel seja modificada
    Object.freeze(MATH_CONSTANTS);
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();