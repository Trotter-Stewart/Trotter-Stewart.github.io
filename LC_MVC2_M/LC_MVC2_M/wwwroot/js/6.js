"use strict";

let T = null;

{
    let sc = document.querySelector("#sc");


    async function LoadCourses() {
        let fd = new FormData();
        let url = rootpath + "Summary/GetCourses";
        let opts = {
            method: "post",
            cache: "no-store",
            body: fd,
        };
        let r = await fetch(url, opts);
        let rj = await r.json();

        T = rj;

        sc.innerHTML = "";

        for (let i = 0; i <= rj.length; i++) {
            let opt = document.createElement("option");
            opt.value = rj[i].id;
            opt.text = `${rj[i].id}: ${rj[i].name}`;

            sc.options.add(opt);
        }

    }
    LoadCourses();

   
    function CourseChanged()
    {
        LoadSummary(sc.value);
        //Swal.fire(sc.value);
    }

    sc.addEventListener("change", CourseChanged);



}