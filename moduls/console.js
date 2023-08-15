// console mas comunes

console.log('Any message');

console.error('Hay un error');

console.warn('Hay un warning');

// otros console

console.table([1, 2, 3, 0]);

let table = [
  {
    a: 1,
    b: 'Z'
  },
  {
    a: 2,
    b: 'Otra'
  },
  {
    a: 3,
    b: 'Otra mas'
  },
]

console.table(table);

// group

console.group('Conversacion:');
console.log('Hola');
console.group('Bla');
console.log('Bla bla bla');
console.log('Bla bla bla');
console.log('Bla bla bla');
console.groupEnd('Bla');
console.log('Adios');
console.groupEnd('Conversacion:');

// Ejemplo

console.log();

function doAnyThing() {
  console.group('Funcion 1');

  console.log('Esto es de la funcion 1');
  function2();
  console.log('Volvimos a la funcion 1');

  console.groupEnd('Funcion 1');
}

function function2() {
  console.group('Funcion 2');

  console.log('Esto es de la funcion 2');
  console.log('Esto tambien es de la funcion 2');

  console.groupEnd('Funcion 2');
}

doAnyThing();
console.log();

// contador

console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');

// Limpiar la console
// console.clear();