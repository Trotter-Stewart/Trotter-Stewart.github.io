﻿"use strict";

{
    let c1 = null;//chart 1 js var
    let c2 = null;
    let c3 = null;

    let canvas1 = document.querySelector("#canvas1");
    let canvas2 = document.querySelector("#canvas2");
    let canvas3 = document.querySelector("#canvas3");

    async function LoadChart()
    {
        //fd
        let fd = new FormData();

        //url
        let url = rootpath + "Home/GetSummary";

        //opts
        let opts = {
            method: "post",
            cache: "no-store",
            body:fd,
        }


        //fetch()
        let r = await fetch(url, opts);
        let rj = await r.json();

        // clear the chart
        if (c1 != null)
        {
            c1.destroy();
        }
        canvas1.innerHTML = "";

        if (c2 != null) {
            c2.destroy();
        }
        canvas2.innerHTML = "";

        if (c3 != null) {
            c3.destroy();
        }
        canvas3.innerHTML = "";

        //show the chart

        opts = {
            type: "pie",
            data: {
                labels:rj.map(x=>x.l),
                datasets: [{
                    label: "Number of Patients",
                    data:rj.map(x=>x.n),
                }],
            },
        };
        c1 = new Chart(canvas1, opts);

        opts = {
            type: "bar",
            data: {
                labels: rj.map(x => x.l),
                datasets: [{
                    label: "Number of Patients",
                    data: rj.map(x => x.n),
                }],
            },
        };
        c2 = new Chart(canvas2, opts);

        opts = {
            type: "line",
            data: {
                labels: rj.map(x => x.l),
                datasets: [{
                    label: "Number of Patients",
                    data: rj.map(x => x.n),
                }],
            },
        };
        c3 = new Chart(canvas3, opts);




    }

    LoadChart();


}