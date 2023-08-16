// const process = require('process'); // Esto no es necesario, ya que es es un modulo global, pero se puede hacer

process.on('beforeExit', () => {
  console.log('El proceso va a terminar');
});

process.on('exit', () => {
  console.log('El proceso ha terminado');
  
  setTimeout(() => {
    console.log('Esto no se va a ver nunca');
  }, 0); // Esto no se va a ejecutar nunca, ya que el proceso ya ha terminado
  // solo se puede ejecutar codigo sincrono
});

// process.on('unhandledRejection'); // Esto es para capturar promesas que se han rechazado y no se han capturado

process.on('uncaughtException', (err, origen) => {
  console.error('Vaya se nos ha olvidado capturar un error');
  console.error(err);
  console.error(err.message);

  setTimeout(() => {
    console.log('Esto viene desde las excepciones');
  }, 0);
});

funcionQueNoExiste();

console.log('Esto si el error no se recoge, no sale');

// para ver todos los eventos disponibles
process.on('');