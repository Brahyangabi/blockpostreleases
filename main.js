const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    fullscreen: true, // Auto-fullscreen
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    }
  });

  // Load your Unity game files or local server URL
  win.loadURL('https://launcher.cs2unblocked.pages.dev');
}

app.whenReady().then(createWindow);
