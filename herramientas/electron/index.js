const { app, BrowserWindow } = require('electron');

let mainWindow;

app.on('ready', createWindow);

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    // webPreferences: {
    //   preload: `${__dirname}/preload.js`, //preload: script que se ejecuta antes de crear la ventana principal
    // }, // webPreferences: permite usar features
  });

  mainWindow.loadFile('index.html');
}