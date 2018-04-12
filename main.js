const electron = require('electron')

const app = electron.app
const BrowserWindow = electron.BrowserWindow
const path = require('path')
const url = require('url')

var process = require('process')

function createWindow () {
	window = new BrowserWindow({width: 1200, height: 800})

	window.loadURL(url.format({
		pathname: path.join(__dirname, 'dist', 'index.html'),
		protocol: 'file:',
		slashes: true
	}))

	window.webContents.openDevTools()

	window.on('closed', () => {
		window = null
	})

	app.on('window-all-closed', () => {
		if (process.platform !== 'darwin') {
			app.quit()
		}
	})

	app.on('activate', () => {
		if (window === null) {
			createWindow()
		}
	})

	app.on('ready', createWindow)
}
  
app.on('ready', createWindow)