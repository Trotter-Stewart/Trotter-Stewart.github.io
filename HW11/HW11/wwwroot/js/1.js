"use strict";

let LoadTableFunc = null;

{
    let grid = null;

    let tbldiv = document.querySelector("#tbldiv");

    async function LoadTable() 
    {
        //fd
        let fd = new FormData();

        //url
        let url = rootpath + "Home/GetPatients"
        //opts
        let opts = {
            method: "post",
            cache: "no-store",
            body:fd,
        };


        //fetch()
        let r = await fetch(url, opts);
        let rj = await r.json();


        //show table
        //clear table

        if (grid != null)
        {
            grid.destroy();
        }
        tbldiv.innerHTML = "";

        opts = {
            data: rj,
            width: 1000,
            search: true,
            sort: true,
            pagination: {limit:5,},
            columns: [{ id: "id", name: "ID" }, { id: "name", name: "Name" }, { id: "age", name: "Age" }, { id: "weight", name: "Weight (lbs)" }, { id: "bmi", name: "BMI" }, { id: "bmilevel", name: "BMI Level" },],
        };
        grid = new gridjs.Grid(opts);
        grid.render(tbldiv);



    }// end of load table function
    LoadTableFunc = LoadTable;
    LoadTable();

}

//add patient
{
    let pid = document.querySelector("#pid")
    let pname = document.querySelector("#pname")
    let page = document.querySelector("#page")
    let pweight = document.querySelector("#pweight")
    let pbmi = document.querySelector("#pbmi")

    let addbtn = document.querySelector("#addbtn");

    let statusdiv = document.querySelector("#statusdiv");

    async function AddPatient()
    {
        //form data
        let fd = new FormData();
        fd.append("id", pid.value);
        fd.append("name", pname.value);
        fd.append("age", page.value);
        fd.append("weight", pweight.value);
        fd.append("bmi", pbmi.value);

        //url
        let url = rootpath + "Home/AddPatient";

        //opts
        let opts = {
            method: "post",
            cache: "no-store",
            body:fd,
        };

        //fetch
        let r = await fetch(url, opts);
        let rj = await r.json();
        //show status
        //mes
        statusdiv.innerHTML = rj.mes;
        if (rj.status = "success")
        {
            opts = {
                title: "Success",
                text: rj.mes,
                icon:"success",
            };
            Swal.fire(opts);

            
        }
        else
        {
            opts = {
                title: "Fail",
                text: rj.mes,
                icon: "error",
            };
            Swal.fire(opts);
        }


        //reload table
        LoadTableFunc();
    }

    addbtn.addEventListener("click", AddPatient);
}

//edit
{
    let pid = document.querySelector("#pid")
    let pname = document.querySelector("#pname")
    let page = document.querySelector("#page")
    let pweight = document.querySelector("#pweight")
    let pbmi = document.querySelector("#pbmi")

    let editbtn = document.querySelector("#editbtn");

    let statusdiv = document.querySelector("#statusdiv");

    async function EditPatient() {
        //form data
        let fd = new FormData();
        fd.append("id", pid.value);
        fd.append("name", pname.value);
        fd.append("age", page.value);
        fd.append("weight", pweight.value);
        fd.append("bmi", pbmi.value);

        //url
        let url = rootpath + "Home/EditPatient";

        //opts
        let opts = {
            method: "post",
            cache: "no-store",
            body: fd,
        };

        //fetch
        let r = await fetch(url, opts);
        let rj = await r.json();
        //show status
        //mes
        statusdiv.innerHTML = rj.mes;
        if (rj.status = "success") {
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


        //reload table
        LoadTableFunc();
    }

    editbtn.addEventListener("click", EditPatient);
}

//delete
{
    let pid = document.querySelector("#pid")
    //let pname = document.querySelector("#pname")
    //let page = document.querySelector("#page")
    //let pweight = document.querySelector("#pweight")
    //let pbmi = document.querySelector("#pbmi")

    let editbtn = document.querySelector("#deletebtn");

    let statusdiv = document.querySelector("#statusdiv");

    async function DeletePatient() {
        //form data
        let fd = new FormData();
        fd.append("id", pid.value);
        //fd.append("name", pname.value);
        //fd.append("age", page.value);
        //fd.append("weight", pweight.value);
        //fd.append("bmi", pbmi.value);

        //url
        let url = rootpath + "Home/DeletePatient";

        //opts
        let opts = {
            method: "post",
            cache: "no-store",
            body: fd,
        };

        //fetch
        let r = await fetch(url, opts);
        let rj = await r.json();
        //show status
        //mes
        statusdiv.innerHTML = rj.mes;
        if (rj.status = "success") {
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


        //reload table
        LoadTableFunc();
    }

    deletebtn.addEventListener("click", DeletePatient);
}

