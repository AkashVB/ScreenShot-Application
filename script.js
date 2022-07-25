const{ipcRenderer}=require("electron");
const path = require('path');

window.addEventListener("DOMContentLoaded",()=>{
    console.log("loaded");
    document.getElementById("btn").addEventListener("click",()=>{
        ipcRenderer.send("screenshot:capture",{});
        
    });

    ipcRenderer.on("screenshot:captured",(e,imageData)=>{
        document.getElementById("placeholder").src=imageData;
    });
});