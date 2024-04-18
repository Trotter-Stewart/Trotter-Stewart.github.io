"use strict"

{
    let mapdiv = document.querySelector("#mapdiv");
    mapdiv.innerHTML = "";

    let map = L.map('mapdiv', { attributionControl: false, }).setView([35.33443889141701, -97.07270547900498], 12);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: ''
    }).addTo(map);

//    L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
//        maxZoom: 20,
//        subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
//    }).addTo(map);
}