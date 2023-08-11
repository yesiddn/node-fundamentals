console.log('Hola mundo');

let i = 0;
setInterval(function () {
  console.log(i);
  i++;

  /* 
  > Hay que tener mucho cuidado con los errores ya que al ser un proceso monohilo se detiene todo el proceso
  > Todo lo que pueda fallar, antes de que falle, hay que comprobarlo
  > Una buena forma de manejar los errores es con try catch
  
  if (i === 5) {
    console.log('forzamos error');
    var a = 3 + z;
  }
  */
}, 1000);

console.log('Segunda instrucción');