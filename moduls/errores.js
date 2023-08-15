// Syncronous errors
function anotherFunction() {
  seRompe();
}

function seRompe() {
  return 3 + z;
}

try {
  anotherFunction();
} catch (err) {
  console.error("Vaya, algo se ha roto...");
  console.error(err.message);
}

console.log("Pero no pasa nada, el programa continua");
console.log();

// Asyncronous errors

function seRompeAsincrona() {
  setTimeout(function () {
    // return 3 + z; // como la funcion asincrona se ejecuta en otro hilo, no se captura el error, por lo que hay que capturarlo dentro de la funcion
    try {
      return 3 + z;
    } catch (err) {
      console.error("Vaya, algo se ha roto...");
      console.error(err.message);
    }
  });
}

// try {
//   seRompeAsincrona(); // No se captura el error
// } catch (err) {
//   console.error('Vaya, algo se ha roto...');
//   console.error(err.message);
// }

seRompeAsincrona(); // Se captura el error dentro de la funcion