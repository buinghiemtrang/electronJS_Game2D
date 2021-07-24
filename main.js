let {app, BrowserWindow} = require('electron')

app.on('ready', () =>{
    new BrowserWindow({
        width:800,
        height:600,
        resizable:false})
        .loadFile('index.html')
})