function asincrona(callback) {
  setTimeout(() => {
    try {
      let a = 3 + z;
      callback(null, a);
    } catch (err) {
      callback(err); // dependiendo el diseño de la función, los demas argumentos se pueden o no omitir. Por ejemplo -> callback(err, null) o callback(err, false), etc. En este caso retorna (err, undefined).
    }
  });
}

asincrona((err, dato) => {
  if (err) {
    console.error('Tenemos un error');
    console.error(err.message);
    return false;
    // throw err; // NO VA A FUNCIONAR, porque solo funciona en funciones sincronas.
  }

  console.log('Todo ha ido bien, mi data es', dato);
});

// En funciones asincronas con callbacks, los errores se manejan de esta manera.