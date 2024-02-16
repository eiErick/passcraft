const { app, BrowserWindow } = require("electron");

const createWindow = () => {
    const win = new BrowserWindow({
        windth: 800,
        height: 510,
        minWidth: 400,
        minHeight: 510,
    });
    win.loadFile("index.html");
    win.setMenu(null);
}

app.whenReady().then(() => {
    createWindow();
    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});
