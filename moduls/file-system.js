const fs = require('fs');

function readFile(path, callback) {
  fs.readFile(path, (err, data) => {
    // console.log(data); // <Buffer 48 6f 6c 61 20 6d ... >
    // console.log(data.toString()); // Hola, soy un archivo de texto...
    callback(data.toString()); // Hola, soy un archivo de texto...
  })
}

function writeFile(path, content, callback) {
  fs.writeFile(path, content, (err) => {
    if (err) {
      console.error('No he podido escribir el archivo.');
      console.error('Error: ', err);
    } else {
      console.log('Se ha escrito el archivo correctamente.');
    }
  })
}

function deleteFile(path, callback) {
  fs.unlink(path, callback);
}

// read(__dirname + '/archivo.txt', console.log);
// write(__dirname + '/archivo2.txt', 'Soy un nuevo archivo!', console.log); // Si no existe, lo crea. Si existe, lo sobreescribe.
// deleteFile(__dirname + '/archivo2.txt', console.log);