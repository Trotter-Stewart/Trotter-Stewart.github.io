"use strict";

let grid = null; // js var for table

let chart1 = null; //js var for charts
let chart2 = null;
let chart3 = null;

async function LoadSummary(cid)
{
    //fd
    let fd = new FormData(); // submit params to WEB API
    //fd.append("cid", "MIS3013");
    fd.append("cid", cid);


    // url
    let url = rootpath + "Summary/GetSummary";

    // opts
    let opts = {
        method: "post",
        cache: "no-store",
        body:fd,

    };

    // fetch()
    let r = await fetch(url, opts);
    let rj = await r.json();

    // showTAbekk
    if (grid != null)
    {
        grid.destroy();
    }
    let tbldiv = document.querySelector("#tbldiv");
    tbldiv.innerHTML = "";

    opts = {
        data: rj,
        width: 300,
        columns: [{ id: "l", name: "LG" }, {id:"n", name:"Number"},],
    };

    grid = new gridjs.Grid(opts);
    grid.render(tbldiv);

    // showChart
    if (chart1!=null)
    {
        chart1.destroy();
    }

    if (chart2 != null) {
        chart2.destroy();
    }

    if (chart3 != null) {
        chart3.destroy();
    }

    let canvas1 = document.querySelector("#canvas1");
    let canvas2 = document.querySelector("#canvas2");
    let canvas3 = document.querySelector("#canvas3");

    canvas1.innerHTML = "";
    canvas2.innerHTML = "";
    canvas3.innerHTML = "";


//cahrt 1
    opts = {
        type: "pie",
        data: {
            labels:rj.map(x=>x.l),
            datasets: [{label:"Number",data:rj.map(x=>x.n),}],
        },
    };

    chart1 = new Chart(canvas1,opts);
//chart 2
    opts = {
        type: "bar",
        data: {
            labels: rj.map(x => x.l),
            datasets: [{ label: "Number", data: rj.map(x => x.n), }],
        },
    };

    chart2 = new Chart(canvas2, opts);

    //chart 3
    opts = {
        type: "line",
        data: {
            labels: rj.map(x => x.l),
            datasets: [{ label: "Number", data: rj.map(x => x.n), }],
        },
    };

    chart3 = new Chart(canvas3, opts);



    ///Swal.fire("Load Summary Called" + cid);
}