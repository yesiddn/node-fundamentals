# node-fundamentals

## Origenes y filosofía

**NodeJS es un entorno de ejecución de JavaScript fuera del navegador.** Se crea en 2009, orientado a servidores. Es muy importante que esté fuera del navegador debido a que ya no es necesario un navegador web para ejecutar código JavaScript.

Características principales de JavaScript:

- **Concurrencia:** Es monohilo, con entradas y salidas asíncronas.
- **Motor V8:** Creado por Google en 2008 para Chrome. Escrito en C++. Convierte JS en código máquina en lugar de interpretarlo en tiempo real.
- Todo funciona en base a **Módulos**, que son piezas de código muy pequeñas que modularizan nuestros sistemas y ayudan a entender mejor el código.
- **Orientación a Eventos**, existe un bucle de eventos que se ejecuta constantemente (Event Loopt). Lo que nos permite programar de forma reactiva, lo que quiere decir que podemos programar con la lógica de “Cuando sucede algo, se ejecuta esta parte de mi código y eso a su vez dispara otra parte”.

![Resumen origenes y filosofía de NodeJS.](https://static.platzi.com/media/user_upload/nodeJSAndres-afee6d9c-36ee-40b2-9fd1-918042b72172.jpg)

## Event Loop: asíncrona por diseño

![Event Loop.](https://i.ibb.co/j42621b/event-loop.png)

**Event Queue:** Contiene todos los eventos que se generan por nuestro código (Funciones, peticiones, etc.), estos eventos quedan en una cola que van pasando uno a uno al Event Loop.

**Event Loop:** Se encarga de resolver los eventos ultra rápidos que llegan desde el Event Queue. En caso de no poder resolverse rápido, enviá el evento al Thread Pool.

**Thread Pool:** Se encarga de gestionar los eventos de forma asíncrona. Una vez terminado lo devuelve al Event Loop. El Event Loop vera si lo pasa a Event Queue o no.

## Herramientas: Nodemon y PM2

### Nodemon

Es una herramienta que nos permite reiniciar el servidor automáticamente cada vez que detecta un cambio en el código. Es muy útil para desarrollo.

**Instalación:**

```bash
npm install -g nodemon
```

> **NOTA:** El parámetro -g es para instalarlo de forma global.

**Uso:**

```bash
nodemon [archivo]
```

### PM2

Es una herramienta que nos permite administrar en producción nuestro servidor. Nos permite escalarlo, reiniciarlo, monitorearlo, etc.

**Instalación:**

```bash
npm install -g pm2
```

**Uso:**

- Iniciar el servidor:

```bash
pm2 start [archivo]
```

- Detener el servidor:

```bash
pm2 stop [archivo]
```

- Ver el estado del servidor:

```bash
pm2 status
```

- Ver los logs del servidor:

```bash
pm2 logs
```

- Ver monitoreo del servidor:

```bash
pm2 monit
```

> **NOTA:** Nodemon es una herramienta muy útil para desarrollo, ya que cada vez que detecta un cambio en el servidor ejecuta toda la aplicación de nuevo. Mientras que, PM2 es una herramienta para producción, ya que nos permite escalar, reiniciar, monitorear, etc.

## Módulos

### Global

Son módulos que vienen por defecto en NodeJS y no es necesario instalarlos. Algunos de ellos son:

- **console:** Nos permite imprimir en consola.
- **process:** Nos permite acceder al proceso de NodeJS.
- **setTimeOut:** Nos permite ejecutar una función después de un tiempo determinado.
- **setInterval:** Nos permite ejecutar una función cada cierto tiempo.

![Resumen.](https://static.platzi.com/media/user_upload/global-fa55c760-fa57-43f2-a670-a86345c49c42.jpg)

### Process

#### Child Process

Nos permite ejecutar procesos en el sistema operativo en otro hilo de forma asíncrona. Por ejemplo, podemos ejecutar un script de Python desde NodeJS.

- **child_process.exec():** Ejecuta un comando en el sistema operativo y nos devuelve un callback con 3 parámetros: error, stdout y stderr. [Ejemplo](./moduls/child-process-exec.js)

- **child_process.spawn():** Ejecuta un comando en el sistema operativo y nos devuelve un objeto con toda la información del proceso. [Ejemplo](./moduls/child-process-spawn.js)

El módulo de procesos secundarios de Node.js (child_process) tiene dos funciones spawn y exec, mediante las cuales podemos iniciar un proceso secundario para ejecutar otros programas en el sistema.

La diferencia más significativa entre child_process.spawn y child_process.exec está en que spawn devuelve un stream y exec devuelve un buffer.

- Usa **spawn** cuando quieras que el proceso hijo devuelva datos binarios enormes a Node.
- Usa **exec** cuando quieras que el proceso hijo devuelva mensajes de estado simples.
- Usa **spawn** cuando quieras recibir datos desde que el proceso arranca.
- Usa **exec** cuando solo quieras recibir datos al final de la ejecución.

> Un buen blog para revisar mas del tema: [Diferencia entre spawn y exec de child_process de NodeJS - michelletorres](https://yosoy.dev/diferencia-entre-spawn-y-exec-de-child_process-de-nodejs/)

### Módulos nativos de C++

#### Instalación y configuración

1. Instala `node-gyp`. Hay que hacerlo de forma global. Para eso, ejecuta:

    ```npm i -g node-gyp```

    _Dependiendo del sistema de archivos, y los permisos, puede que tengas que usar sudo en linux y mac, o ejecutar como administrador en windows_

2. Crea tu archivo fuente. Un ejemplo lo puedes encontrar en [la documentación de node](https://nodejs.org/api/addons.html#addons_hello_world)
3. Crea un `binding.gyp` en la raiz del modulo.
4. En la carpeta raiz del modulo, ejecuta:

    ```node-gyp configure```

5. Se habrá generado un directorio build.
6. En la carpeta raiz del modulo, ejecuta:

    ```node-gyp build```

7. El modulo se compilara. y podras importarlo en javascript. Puedes revisar que exista el archivo `build/Release/addon.node` _(es un binario, así que no podrás abrirlo)_
8. Para usarlo, crea un archivo js. Para importarlo:

    ```const addon = require('./build/Release/addon');```

    y para usarlo:

    ```addon.hello()```

    deberá imprimir `world`

## Debugging

Node.js viene integrado con un modo de debug para poder conectarnos desde cualquier herramienta de inspección de código a nuestro código de node.js. Podemos utilizar en la terminal el flag de --inspect con nodemon.

```bash
nodemon --inspect [archivo]
```

Luego, en la barra de navegación de Chrome, escribimos chrome://inspect y damos click en Open dedicated DevTools for Node o en la sección de Remote Target damos click en inspect.

## Automatización de tareas con Gulp

`Gulp` es una herramienta que nos permite automatizar tareas repetitivas en nuestro flujo de trabajo. Por ejemplo, podemos minificar archivos, compilar archivos SASS a CSS, procesos de consola o con paquetes externos, etc.

Existen distintos módulos externos que nos ayudan en la automatización de procesos, sin embargo, `gulp` es una herramienta muy completa para este tipo de tareas.

### Instalación

```bash
npm i gulp gulp-server-livereload
```

### Uso

Importar el módulo en el archivo `gulpfile.js`.

```js
const gulp = require('gulp');
```

Crear la tarea que se va a automatizar.

```js
gulp.task('build', (cb) => {
    console.log('Building the site');
    setTimeout(cb, 1200);
});
```

Crear un script personalizado en el package.json.

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "gulp build"
}
```

Correr el script.

```bash
npm run build

/* 
Output:
    > automatization@1.0.0 build
    > gulp build

    [16:15:03] Using gulpfile ~/personalProjects/course-nodejs-basis/src/tools/automatization/gulpfile.js
    [16:15:03] Starting 'build'...
    Building the site
    [16:15:04] Finished 'build' after 1.21 s
*/
```

### Otros scripts

```js
gulp.task('serve', (cb) => {
  gulp.src('www').pipe(
    server({
      livereload: false,
      open: true,
    })
  );
});
```

Crea una tarea llamada `serve` y en la función utiliza métodos de gulp como el src que permite dar el inicio de la ruta del lugar dónde se obtiene la información. En este caso es un servidor y empieza por `www`.

Luego se concatena el método `pipe()` con la información que crea el módulo `gulp-server-livereload`, que puede recibir algunas propiedades de configuración como `livereload` o `open` .

En caso de querer ejecutar **2 tareas** seguidas se puede hacer lo siguiente en el archivo `gulpfile.js`:

```js
gulp.task('default', gulp.series('build', 'serve'));
```

El nombre default en el primer argumento de la tarea permite que no se deba poner nombre a esta, sino que sea la tarea a ejecutar por defecto.

Y luego en el `package.json` deberás poner lo siguiente:

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "gulp",
},
```
