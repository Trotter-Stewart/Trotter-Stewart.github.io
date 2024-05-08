"use strict";

// this file for the profile page

{
    let sid = document.querySelector("#sid");


    sid.addEventListener("change", () => { Swal.fire(sid.value); });

    async function LoadStudents() {
        let fd = new FormData();

        let url = rootpath + "Profile/GetStus";

        let opts = {
            method: "post",
            cache: "no-store",
            body: fd,
        };

        let r = await fetch(url, opts);
        let rj = await r.json();

        sid.innerHTML = "";

        for (let i = 0; i < rj.length; i++) {
            let opt = document.createElement("option");
            opt.value = rj[i].id
            opt.text = `ID: ${rj[i].id}, Name: ${rj[i].name}`;

            sid.options.add(opt);
        }
    }

    LoadStudents();
}