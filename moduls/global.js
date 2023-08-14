let i = 0;
let interval = setInterval(() => {
  console.log("Hello");
  console.log(i);
  if (i++ === 3) {
    clearInterval(interval);
  }
}, 1000);

// --

setImmediate(() => {
  console.log("Hello");
});

// --

console.log(process);

// --

console.log(__dirname); // C:/node-fundamentals/moduls

// --

console.log(__filename); // C:/node-fundamentals/moduls/global.js

// -- No usar variables globales porque son un foco de problemas, para ello crear modulos y exportarlos

global.miVariable = "mi variable global";
console.log(miVariable); // mi variable global // No es necesario poner global.miVariable