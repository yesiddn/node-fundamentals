const { exec } = require('child_process');
// const exec = require('child_process').exec; // es lo mismo que la linea de arriba

exec('ls -la', (err, stdout, sterr) => {
  // err: error
  // stdout: salida estandar
  // sterr: salida de error
  if (err) {
    console.error(err);
    return false;
  }
  console.log(stdout);
});

// Path: moduls\console.js
exec('node moduls/console.js', (err, stdout, sterr) => {
  if (err) {
    console.error(err);
    return false;
  }
  console.log(stdout);
});