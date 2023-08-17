// Hoy en día, según la documentación de moment,js , el proyecto a sido puesto en modo de mantenimiento. Recibiendo solo actualizaciones de seguridad, por lo que recomiendan no utilizarlo en futuros proyectos.
// Recomiendan usar paquetes como Luxor, Day.js o la API de internacionalización de Javascript. Aquí un artículo acerca de ello.
// https://blog.logrocket.com/4-alternatives-to-moment-js-for-internationalizing-dates/

const moment = require('moment');

let ahora = moment();

console.log(ahora.toString());
console.log(ahora.format('YYYY/MM/DD - HH:mm'));