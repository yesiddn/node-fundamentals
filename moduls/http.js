const http = require('http');

function router(req, res) {
  console.log('Nueva petición');
  console.log(req.url);

  switch (req.url) {
    case '/hola':
      res.write('Hola, que tal?');
      res.end();
      break;
    
    default:
      res.write('Error 404: No se lo que quieres');
      res.end();
  }

  // // Escribir cabecera
  // res.writeHead(201, { 'Content-Type': 'text/plain' }); // Se puede ver en la consola de Chrome en Network -> Headers

  // // Escribir respuesta al usuario
  // res.write('Hola, ya se usar HTTP de NodeJS');

  // res.end();
}

http.createServer(router).listen(3000); // los puestos más comunes son 3000, 3001, ..., 8080, 8081, 80 (puerto por defecto pero necesita permisos de administrador, malas prácticas)

console.log('Escuchando http en el puerto 3000');

// localhost:3000 -> en la consola se verá la petición
//> Nueva petición
//> /
//> Nueva petición
//> /favicon.ico

// Ejemplo mejor estructurado de router -> https://static.platzi.com/media/user_upload/carbon%20%281%29-b60b0665-a825-4b37-9086-f3ff228f0759.jpg