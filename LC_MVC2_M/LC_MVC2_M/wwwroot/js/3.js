"use strict";


//add 
{//start block

    let addbtn = document.querySelector("#addbtn");

    async function AddStu()
    {
        // prepare params fd for WEB API

        let fd = new FormData();

        let id = document.querySelector("#sid").value;
        let name = document.querySelector("#sname").value;
        let place = document.querySelector("#pname").value;
        let lat = document.querySelector("#plat").value;
        let lon = document.querySelector("#plon").value;
        let dob = document.querySelector("#sdob").value;

        fd.append("sid",id);
        fd.append("sname",name);
        fd.append("place",place);
        fd.append("lat",lat);
        fd.append("lon",lon);
        fd.append("dob",dob);

        // url
        let url = rootpath +"Home/AddStu";
        // opts
        let opts = {
            method: "post", // get vs post
            cache: "no-store",
            body:fd,
        };
        // fetch()
        let r = await fetch(url, opts);
        let rj = await r.json();

        // success fail
        if (rj.status=="success")
        {//
            LOADT(); // reload the table

            opts =
            {
                title:"Success",
                text: rj.mes,
                icon:"success",
            };

            Swal.fire(opts);
        }
        else
        {
            opts =
            {
                title: "Fail",
                text: rj.mes,
                icon: "error",
            };

            Swal.fire(opts);
        }
        // Update the table


        //Swal.fire("Add Student");
    }

    addbtn.addEventListener("click", AddStu);




}//end block