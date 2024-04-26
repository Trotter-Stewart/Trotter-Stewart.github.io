"use strict";

let LoadTableFun = null;

{
    let grid = null;

    let tbldiv = document.querySelector("#tbldiv");

    async function LoadTable()//local
    {
        // form data
        let fd = new FormData();
        let opts = {
            method: "post",
            cache: "no-store",
            body:fd,
        };
        //url
        let url = rootpath + "Home/GetOrders";

        //fetch
        let r = await fetch(url, opts);
        let rj = await r.json();
        
        //show the json data in table
        if (grid != null)
        {
            grid.destroy();
        }
        tbldiv.innerHTML = "";

        opts = {
            data: rj,
            width: 800,
            search: true,
            sort: true,
            pagination: { limit: 5, },
            columns: [{ id: "id", name: "ID" }, { id: "nCogs", name: "N Cogs" }, { id: "nGears", name: "N Gears" }, { id: "subtotal", name: "SUBTOTAL" }, { id: "level", name: "LEVEL" }],
        };
        grid = new gridjs.Grid(opts);
        grid.render(tbldiv);

    }// end of the load table function
    LoadTableFun = LoadTable;
    LoadTable();
}

// add button
{
    let addbtn = document.querySelector("#addbtn");

    async function AddOrder()
    {
        let oid = document.querySelector("#oid");
        let oncog = document.querySelector("#oncog")
        let ongear = document.querySelector("#ongear")
        //fd
        let fd = new FormData();
        fd.append("id", oid.value);
        fd.append("ncog", oncog.value);
        fd.append("ngear", ongear.value);

        //url
        let url = rootpath + "Home/AddOrder"
        //opts
        let opts = {
            method: "post",
            cache: "no-store",
            body:fd,
        };

        //fetch
        let r = await fetch(url, opts);
        let rj = await r.json();

        // message status
        if (rj.status=="success")
        {
            LoadTableFun();

            opts = {
                title: "Success",
                text: "New order added!",
                icon:"success",
            };
            Swal.fire(opts);
        }
        else
        {
            opts = {
                title: "Fail",
                text: "New order not added!",
                icon: "error",
            };
            Swal.fire(opts);
        }

        // if success
        //LoadTableFun();
        //Swal.fire("OK");
    }

    addbtn.addEventListener("click",AddOrder);
}


// edit button
{
    let editbtn = document.querySelector("#editbtn");

    async function EditOrder() {
        let oid = document.querySelector("#oid");
        let oncog = document.querySelector("#oncog")
        let ongear = document.querySelector("#ongear")
        //fd
        let fd = new FormData();
        fd.append("id", oid.value);
        fd.append("ncog", oncog.value);
        fd.append("ngear", ongear.value);

        //url
        let url = rootpath + "Home/EditOrder"
        //opts
        let opts = {
            method: "post",
            cache: "no-store",
            body: fd,
        };

        //fetch
        let r = await fetch(url, opts);
        let rj = await r.json();

        // message status
        if (rj.status == "success") {
            LoadTableFun();

            opts = {
                title: "Success",
                text: rj.mes,
                icon: "success",
            };
            Swal.fire(opts);
        }
        else {
            opts = {
                title: "Fail",
                text: rj.mes,
                icon: "error",
            };
            Swal.fire(opts);
        }

        // if success
        //LoadTableFun();
        //Swal.fire("OK");
    }

    editbtn.addEventListener("click", EditOrder);
}

//delete
{
    let deletebtn = document.querySelector("#deletebtn");

    async function DeleteOrder() {
        let oid = document.querySelector("#oid");
       // let oncog = document.querySelector("#oncog")
       // let ongear = document.querySelector("#ongear")
        //fd
        let fd = new FormData();
        fd.append("id", oid.value);
       // fd.append("ncog", oncog.value);
        //fd.append("ngear", ongear.value);

        //url
        let url = rootpath + "Home/DeleteOrder"
        //opts
        let opts = {
            method: "post",
            cache: "no-store",
            body: fd,
        };

        //fetch
        let r = await fetch(url, opts);
        let rj = await r.json();

        // message status
        if (rj.status == "success") {
            LoadTableFun();

            opts = {
                title: "Success",
                text: rj.mes,
                icon: "success",
            };
            Swal.fire(opts);
        }
        else {
            opts = {
                title: "Fail",
                text: rj.mes,
                icon: "error",
            };
            Swal.fire(opts);
        }

        // if success
        //LoadTableFun();
        //Swal.fire("OK");
    }

    deletebtn.addEventListener("click", DeleteOrder);
}