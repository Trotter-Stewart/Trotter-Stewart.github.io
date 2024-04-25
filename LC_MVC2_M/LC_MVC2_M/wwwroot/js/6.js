"use strict";

{
    let sc = document.querySelector("#sc");

    function CourseChanged()
    {
        Swal.fire(sc.value);
    }

    sc.addEventListener("change", CourseChanged);
}