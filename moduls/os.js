const os = require('os');

console.log(os.arch()); // os.arch -> arquitectura -> x64
console.log(os.platform()); // os.platform -> plataforma -> lunux, windows, ...
console.log(os.cpus()); // os.cpus -> information about cpu
console.log(os.cpus().length); // 8

console.log(os.constants);

const SIZE = 1024;
function kb(bytes) { return bytes / SIZE; }
function mb(bytes) { return kb(bytes) / SIZE; }
function gb(bytes) { return mb(bytes) / SIZE; }

console.log('Free system memmory:', os.freemem()); // memoria libre en bytes
console.log('Free system memmory (KB):', kb(os.freemem()));
console.log('Free system memmory (MB):', mb(os.freemem()));
console.log('Free system memmory (GB):', gb(os.freemem()));
console.log('Total system memmory:', gb(os.totalmem())); // memoria total

// directorio raiz
console.log('Home dir:', os.homedir());

// directorio temporal
console.log('Temp dir:', os.tmpdir());

// hostname
console.log('Hostname:', os.hostname());
 
// interfaces de red
console.log('Network interfaces:', os.networkInterfaces());