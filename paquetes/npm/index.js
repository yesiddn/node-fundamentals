// is-odd depende de is-number, por lo que se instalará automáticamente
const isOdd = require('is-odd');
// is-even depende de is-number
const isEven = require('is-even');

// Ver el codigo de ambas dependencias para entender como funcionan

console.log('3 is odd', isOdd(3));
console.log('3 is even', isEven(3));