"use strict";

let grid = null;// js var for table

async function LoadTable()
{
    //fd
    let fd = new FormData();

    //url
    let url = rootpath + "Profile/GetPS";//No slash before the profile
    //opts
    let opts = {
        method: "post",
        cache: "no-store",
        body:fd,
    };


    //fetch()
    let r = await fetch(url, opts);
    let rj = await r.json();

    // show table
    let tbldiv = document.querySelector("#tbldiv");// container

    if (grid!=null)
    {
        grid.destroy();
    }

    tbldiv.innerHTML = "";

    opts = {
        data:rj,
    };
    grid = new gridjs.Grid(opts);//js var 
    grid.render(tbldiv);// show table in tbldiv




    


}

LoadTable();