"use strict";

let R = null;
let chart = null;
let tbl2 = null;

let b1 = document.querySelector("#b1");

async function sc()
{
    let url = `https://juxinglong.github.io/static/data/states.json`;

    let r = await fetch(url);// async
    let rj = await r.json();//

    // get chart container
    let cc = document.querySelector("#cc");

    let opts = {
        type: "pie",//line, bar
        data: {
            labels:rj.map(x=>x.st),
            datasets: [{
                data: rj.map(x => x.p),
                label: "Population",
            },],
        },
    };

   if (chart != null)
   {
        chart.destroy();
    }

   cc.innerHTML = '';

    chart = new Chart(cc, opts);

    let sdiv = document.querySelector("#sdiv");

    let p = {
        data: rj,
        pagination: { limit: 5, },
        sort: true,
        search: true,
        columns: [{ id: "st", name: "STATE" }, {id:"p", name:"POPULATION"},],
    };

    if (tbl2 != null) {
        tbl2.destroy();
    }
    sdiv.innerHTML = ``;

    tbl2 = new gridjs.Grid(p);
    tbl2.render(sdiv);

    console.log(rj);
    R = rj;


    // fetch()
    // Swal.fire("OK");
}

b1.addEventListener("click",sc);