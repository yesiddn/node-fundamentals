const sharp = require('sharp');

// cambiar el tamaño de una imagen
sharp('original.png')
  .resize(80)
  .toFile('resized.png');

// De png a webp
sharp('original.png')
  .toFormat('webp')
  .toFile('formated-webp.webp');
