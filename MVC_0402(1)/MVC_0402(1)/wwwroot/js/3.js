{
    "use strict";

    let sid = document.querySelector("#sid");
    let sname = document.querySelector("#sname");
    let sage = document.querySelector("#sage");
    let sgrade = document.querySelector("#sgrade");

    let editbtn = document.querySelector("#editbtn");

    async function editstu()
    {
        // params form data
        let fd = new FormData();
        fd.append("id", sid.value);
        fd.append("name", sname.value);
        fd.append("age", sage.value);
        fd.append("grade",sgrade.value);
        //url
        let url = rootpath + "Third/EditStu";


        //fetch()
        let opts = {
            method: "post",
            cache: "no-store",
            body:fd,
        };
        let r = await fetch(url, opts);
        let rj = await r.json();

        let rdiv = document.querySelector("#r");
        rdiv.innerHTML = `
        Status: ${rj.status}
        <br/>
        Message: ${rj.mes}
        `;
        // show result

        Swal.fire("edit");
    }

    editbtn.addEventListener("click",editstu);


}
