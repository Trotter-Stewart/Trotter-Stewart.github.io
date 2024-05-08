using Microsoft.AspNetCore.Mvc;
using MVC_0402_1_.Data;

namespace MVC_0402_1_.Controllers
{
    public class FourthController : Controller // Fourth
    {
        StudentDB db = new StudentDB();//create a DB connection

        public IActionResult Index() //action view html
        {
            return View();
        }

        public JsonResult GetStus() // action web api
        {
            var r=db.Students; // we get the students table

            return Json(r);
        }
    }
}
