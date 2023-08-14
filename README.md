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
