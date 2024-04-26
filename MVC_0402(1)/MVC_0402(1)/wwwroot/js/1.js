"use strict";

// define a block
{
    let opts =
    {
        title: "This is the thrid controller",
        text: "Third Index",
        icon: "success",
    };

    //Swal.fire(opts);
}

let addbtn = document.querySelector("#addbtn");

let sid = document.querySelector("#sid");
let sname = document.querySelector("#sname");
let sage = document.querySelector("#sage");
let sgrade = document.querySelector("#sgrade");

async function addstu()
{
    //form data, parameters
    let fd = new FormData();
    fd.append("age", sage.value);
    fd.append("id", sid.value);
    fd.append("name", sname.value);
    fd.append("grade", sgrade.value);




    // fetch()
    let url = rootpath + `Third/AddStu`;
    let opts = {
        method: "post",
        cache: "no-store",
        body:fd,
    };

    let r = await fetch(url, opts);
    let rj = await r.json();

    //
    let rdiv = document.querySelector("#r");

    let mes = `
    Number of students: ${rj.n}
    <br/>
    New student information: ${rj.mes}
    `;

    rdiv.innerHTML = mes;


    Swal.fire(mes);
}

addbtn.addEventListener("click", addstu);

