console.time('todo');

// bucle 1
console.time('bucle');

let total = 0;

for (let i = 0; i < 1000000000; i++) {
  total += i;
}

console.timeEnd('bucle');

// asincronismo
console.time('asincrono');

asiincrona()
  .then(() => {
    console.timeEnd('asincrono');
  });

// bucle 2
let total2 = 0;

console.time('bucle 2');

for (let j = 0; j < 1000000; j++) {
  total2 += j;
}

console.timeEnd('bucle 2');

console.timeEnd('todo');

// función asíncrona
function asiincrona() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Termina el proceso asíncrono');
      resolve();
    });
  });
}