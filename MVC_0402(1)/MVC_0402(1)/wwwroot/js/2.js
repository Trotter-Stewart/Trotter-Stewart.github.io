"use strict";

{
    let tbl = document.querySelector("#tbl");

    let grid = null;
    async function ShowTable()
    {
        let url = rootpath + "Fourth/GetStus";

        let fd = new FormData();

        let params = {
            method: "post",
            cache: "no-store",
            body:fd,


        };

        let r = await fetch(url, params); //async function
        let rj = await r.json();

        if (grid != null)
        {
            grid.destroy();
        }
        tbl.innerHTML = "";

        params = {
            data: rj,
            pagination: { limit: 5, },// each page 5 rows
            width:800,
            search: true,
            sort: true,
        };
        grid = new gridjs.Grid(params); // create the js table object
        grid.render(tbl); // show the table into the tbl div
    }// end of the show table function

    ShowTable();


}