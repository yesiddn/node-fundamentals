const { spawn } = require('child_process');

let process = spawn('ls', ['-la']);

console.log('Process ID', process.pid);
console.log('Is connected?', process.connected);

process.stdout.on('data', (data) => {
  console.log('Is killed? ', process.killed);
  console.log(data.toString());
});

process.on('exit', () => {
  console.log('Process ended');
  console.log('Is killed? ', process.killed);
});