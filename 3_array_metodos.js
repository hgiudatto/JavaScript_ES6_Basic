let grupoChat = ["Marta", "Francisco", "Carlos", "Federico", "Leonor"];
console.log(`Grupo chat original: ${grupoChat}, miembros: ${grupoChat.length}`);
console.log(
  "-----------------------------------------------------------------"
);
// push
let nuevaLongitud = grupoChat.push("Silvio");
console.log(
  `Grupo chat actualizado: ${grupoChat}, miembros: ${grupoChat.length}`
);
console.log(
  "-----------------------------------------------------------------"
);

let deportes = ["🏊‍♂️", "🛶", "🏀", "⛳", "🥊"];

// isArray
// Operador ternario
Array.isArray(deportes)
  ? console.log(`deportes es un array`)
  : console.log(`deportes no es un array`);
console.log(
  "-----------------------------------------------------------------"
);

// shift
console.log(`${deportes.length} deportes disponibles: ${deportes}`);
console.log(
  "-----------------------------------------------------------------"
);

const res2 = deportes.shift();
console.log(
  `Deporte eliminado: ${res2} - ${deportes.length} - deportes disponibles: ${deportes}`
);
console.log(
  "-----------------------------------------------------------------"
);

// unshift
const res0 = deportes.unshift("🎾");
console.log(
  `Deporte agregado; ${deportes.length} deportes disponibles: ${deportes}`
);
console.log(
  "-----------------------------------------------------------------"
);

// pop
const res1 = deportes.pop();
console.log(
  `Deporte eliminado: ${res1} - ${deportes.length} - deportes disponibles: ${deportes}`
);
console.log(
  "-----------------------------------------------------------------"
);

// push
deportes.push("🏄‍♂️");
console.log(
  `Deporte agregado; ${deportes.length} - deportes disponibles: ${deportes}`
);
console.log(
  "-----------------------------------------------------------------"
);

// forEach
deportes.forEach((num, ind) => console.log(`index: ${ind} - value: ${num}`));
