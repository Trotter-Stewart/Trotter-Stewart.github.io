"use strict";

{// start block

    let grid = null; //js variable for the table
    let tbldiv = document.querySelector("#tbldiv");

    async function LoadTable()
    {
        //form data for parameters
        let fd = new FormData();


        //url
        let url = rootpath + "Home/GetAllStus";

        //opts
        let opts =
        {
            method: "post",
            cache: "no-store",
            body: fd,
        };


        // fetch() r rj
        let r = await fetch(url, opts);
        let rj = await r.json();


        //show in the table
        //1. Clear the table
        if (grid != null)
        {
            grid.destroy();
            grid = null;
        }
        tbldiv.innerHTML = "";

        //2. Show a new table
        opts = {
            data: rj,
            search: true,
            sort: true,
            width: 1100,
            pagination: { limit: 5, },
            columns: [{ id: "id", name: "ID" }, { id: "name", name: "NAME" }, { id: "dob", name: "DOB" }, { id: "favPlace", name: "Place" }, { id: "lat", name: "Latitude" }, { id: "lon", name: "Longitude" },],
        };
        grid = new gridjs.Grid(opts);
        grid.render(tbldiv);

        grid.on("rowClick", (...args) =>
        {/////////////////////////////////
            // id
            let id = args[1]._cells[0].data;
            let sid = document.querySelector("#sid");
            sid.value = id;

            //Name
            let name = args[1]._cells[1].data;
            let sname = document.querySelector("#sname");
            sname.value = name;

            //DOB
            let dob = args[1]._cells[2].data;
            let sdob = document.querySelector("#sdob");
            sdob.value = dob;

            //place
            let place = args[1]._cells[3].data;
            let pname = document.querySelector("#pname");
            pname.value = name;

            //lat
            let lat = args[1]._cells[4].data;
            let plat = document.querySelector("#plat");
            plat.value = lat;

            //lon
            let lon = args[1]._cells[5].data;
            let plon = document.querySelector("#plon");
            plon.value = lon;

            // marker on map
            // delete the pre marker
            if (marker != null) {
                MAP.removeLayer(marker);
                marker = null;
            }
            //add a new marker
            marker = L.marker([lat,lon]);

            marker.bindPopup(`
        <span style="font-size:20px;color:green;">${place}</span>
        <br/>
        Lat: ${lat}
        <br/>
        Lon: ${lon}
        `);

            marker.addTo(MAP);

            marker.openPopup();

            // make the marker the center of the map and zoom in
            MAP.setView([lat,lon], 16);




            //Swal.fire(id);
         ////////////////////////////////////
        });

    }// end of loadtabe function

    LoadTable();// call show table funtion



}// end of block