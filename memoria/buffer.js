/*
Es la forma mas cruda en la que se pueden almacenar los datos. (Se guardan en bytes y no se especifica el tipo de dato)
En la consola, los datos se muestran en formato hexadecimal.
*/

// let buffer = Buffer.alloc(1); // 1 -> numero de espacios que se reservan
// buffer = Buffer.alloc(4); // 4 -> numero de espacios que se reservan
// let buffer = Buffer.from([1, 2, 5]); // forma de guardar informacion directamente

let buffer = Buffer.from('Hola'); // <Buffer 48 6f 6c 61>

console.log(buffer);
console.log(buffer.toString());

// --

let abc = Buffer.alloc(26);
console.log('Buffer vacio', abc);

for (let i = 0; i < 26; i++) {
  abc[i] = i + 97; // ir a una posicion especifica del buffer
}

console.log('Buffer lleno', abc);
console.log('Buffer lleno', abc.toString());