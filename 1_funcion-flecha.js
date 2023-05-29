
// Funciones de Flecha - Arrow Functions
/* function soup2UpperCase(text) {
  const nameUpper = text.toUpperCase();
  console.log(nameUpper);
} */

// const soup2UpperCase = text => console.log(nameUpper)

// soup2UpperCase("sopa");

// Immediately Invoked Function Expression (IIFE)
// Sentencia en la cual la funcion es creada como una expresion
// y es ejecutada inmediatamente.

/* const calcula = (a, b, c) => {
  return b - c + a;
};
const resultado = calcula("23", 20 + 45, 35 + 10);
console.log(resultado); */

// IIFE
((a, b, c) => {
  console.log(b - c + a);
})("23", 20 + 45, 35 + 10);
