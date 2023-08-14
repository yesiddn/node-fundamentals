function hola(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(`Hola, ${nombre}`);
      resolve(nombre);
      // reject('Hay un error');
    }, 1000);
  });
}

function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log('Bla bla bla bla...');
      resolve(nombre);
    }, 1000);
  });
}

function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(`Adios, ${nombre}`);
      resolve();
    }, 1000);
  });
}

function conversacion(nombre, veces, callback) {
  if (veces > 0) {
    hablar(function () {
      conversacion(nombre, --veces, callback);
    });
  } else {
    adios(nombre, callback);
  }
}

// --

async function main() {
  let nombre = await hola('Yesid');
  await hablar();
  await hablar();
  await hablar();
  await adios(nombre);
  console.log('Terminamos el proceso...');
}

console.log('Empezamos el proceso...');
main();
console.log('Seguimos en el proceso...');