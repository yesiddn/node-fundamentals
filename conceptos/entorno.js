// Variables de entorno
let nombre = process.env.NOMBRE || 'Sin nombre';
let web = process.env.WEB || 'No tengo web';

console.log('Hola ' + nombre); // Hola undefined

// Para definir una variable de entorno en la terminal se usa:
// `NOMRE=Yesid node conceptos/entorno.js`
// NOTA: En la terminal de windows (powershell) se usan dos comando: `$env:NOMBRE="Yesid"` y luego `node conceptos/entorno.js`

console.log('Mi web es ' + web);