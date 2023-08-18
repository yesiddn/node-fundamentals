const fs = require('fs');
const stream = require('stream');
const util = require('util');

/*
Podría decirse que un Stream es el proceso de ir consumiendo datos al tiempo en que se reciben. Por ejemplo, cuando vemos un video en Youtube estamos consumiendo datos por medio de streaming (readable stream, porque solo podemos ver los videos mas no editarlos) ya que lo vemos al mismo tiempo en que este se está descargando. de lo contrario habría que esperar a que se descargue el video por completo para poder verlo.
*/

// readable stream
let data = '';

// existen 3 tipos de streams: readable, writable, duplex
let readableStream = fs.createReadStream(__dirname + '/input.txt');

readableStream.setEncoding('UTF8'); // para que el stream devuelva strings y no buffers
readableStream.on('data', function (chunk) {
  // console.log(chunk.toString());
  // console.log(chunk);
  data += chunk;
});

readableStream.on('end', function () {
  console.log(data);
});

// writable stream
// process.stdout es un writable stream
// process.stdout.write('hola'); // escritura estandar de consola
// process.stdout.write('que');
// process.stdout.write('tal');

// duplex stream
const Transform = stream.Transform; // clase para crear un stream de transformación que transforma una secuencia de entrada para que la secuencia de salida sea diferente. Por ejemplo, un stream de transformación podría tomar un archivo de texto y convertir todas las instancias de 'hola' en 'chao' y luego pasar el resultado a un stream de salida.

function Mayus() {
  Transform.call(this); // funcion en la que se ejecura la transformación. Transform es un constructor y se le pasa el contexto de la clase Mayus
  // this es el contexto de la clase Mayus, es decir, que la transformación se ejecutará dentro de la clase Mayus
}

util.inherits(Mayus, Transform);
/*
crea una instancia de la clase Transform y lo establece como prototipo a la función Mayus, tambien adjuntando el EventEmmitter, es decir, el Transform.Call(this).
De modo que cada vez que se crea una instancia de la funcion Mayus se ejecutara el fichero.
En pocas palabras para el que sepa PHP o JAVA, es como llamar al metodo super().
CABE RECALCAR QUE NODE NO RECOMIENDA USAR ESTA FUNCIÓN
*/

// el metodo _transform fue posible gracias a la anterior función. Este metodo significa que la transformacion que se va a realizar puede ser personalizada, es decir, que yo decidiré que hacer con la secuencia de datos que se estan recibiendo como entrada.
Mayus.prototype._transform = function (chunk, codif, callback) {
  chunkMayus = chunk.toString().toUpperCase();
  this.push(chunkMayus);
  callback();
}

// se crea la instancia de la clase Mayus
let mayus = new Mayus();

readableStream
  .pipe(mayus) // el metodo pipe() limita el almacenamiento del buffer para que no haya una sobresaturacion a la hora de pasar la secuencia de datos de un stream a otro
  .pipe(process.stdout); // salida estandar