const puppeteer = require('puppeteer');

(async () => {
  console.log('Lanzamos navegador!');
  // const browser = await puppeteer.launch();
  const browser = await puppeteer.launch({ headless: false }); // Para ver el navegador
  console.log('Todo bien!');

  console.log('Abrimos una nueva página!');
  const page = await browser.newPage();
  await page.goto('https://es.wikipedia.org/wiki/Node.js');

  var titulo1 = await page.evaluate(() => {
    const h1 = document.querySelector('h1');
    console.log(h1);

    return h1.innerText;
  });

  console.log(titulo1);

  console.log('Cerrar navegador...');
  // browser.close();
  console.log('Navegador cerrado!');
})();