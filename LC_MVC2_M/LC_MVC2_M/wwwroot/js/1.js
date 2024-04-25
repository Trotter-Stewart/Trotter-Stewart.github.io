"use strict"

let T = null;//global
let marker = null;//global
let MAP = null;//global map

{//start of the block
    let mapdiv = document.querySelector("#mapdiv");
    mapdiv.innerHTML = "";

    let map = L.map('mapdiv', { attributionControl: false, }).setView([35.33443889141701, -97.07270547900498], 12);

    MAP = map;

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: ''
    }).addTo(map);

    function mapClickedFun(b)
    {
        // show info in the form
        let plat = document.querySelector("#plat");
        let plon = document.querySelector("#plon");

        plat.value = b.latlng.lat;
        plon.value = b.latlng.lng;

        T = b;
        // delete the pre marker
        if (marker != null)
        {
            map.removeLayer(marker);
            marker = null;
        }
        //add a new marker
        marker = L.marker(b.latlng);

        marker.bindPopup(`
        <span style="font-size:20px;color:green;">My Favorite Place</span>
        <br/>
        Lat: ${b.latlng.lat}
        <br/>
        Lon: ${b.latlng.lng}
        `);

        marker.addTo(map);

        marker.openPopup();

        // make the marker the center of the map and zoom in
        map.setView(b.latlng, 16);

        //Swal.fire("Map clicked");
    }

    map.on("click", (a) => { mapClickedFun(a); });

//    L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
//        maxZoom: 20,
//        subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    //    }).addTo(map);

}//end of the block