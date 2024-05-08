"use strict"; //

// add profile record

let addtbn = document.querySelector("#addbtn");

async function AddP()
{
    //fd
    let sid = document.querySelector("#sid").value;
    let sh = document.querySelector("#sh").value;
    let sw = document.querySelector("#sw").value;
    let sc = document.querySelector("#sc").value;
   
    let fd = new FormData();


    fd.append("sid", sid);
    fd.append("h", sh);
    fd.append("w", sw);
    fd.append("c", sc); 

    //url
    let url = rootpath + "Profile/AddP";

    //opts
    let opts = {
        method: "post",
        cache: "no-store",
        body:fd,
    };

    //fetch()
    let r = await fetch(url, opts);
    let rj = await r.json();

    //show result message 
    if (rj.status=="fail")
    {
        opts = {
            title: "Error",
            icon: "error",
            text: rj.mes,

        };
        Swal.fire(opts);
    }
    else
    {
        LoadTable();
        opts = {
            title: "Success",
            icon: "success",
            text: rj.mes,

        };
        Swal.fire(opts);
    }

    //Swal.fire("add student");
}

addbtn.addEventListener("click",AddP );