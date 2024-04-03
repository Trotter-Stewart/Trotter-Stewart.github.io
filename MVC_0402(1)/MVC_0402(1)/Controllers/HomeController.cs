using Microsoft.AspNetCore.Mvc;
using MVC_0402_1_.Data;

namespace MVC_0402_1_.Controllers
{
    public class HomeController : Controller //HomeCOntroller : = inherit
    {
        // the name is: Home
        // define functions: actions

        // actions
        //JsonResult : Web api
        //IActionResult: HTML web page

        public IActionResult P2()
        {
            return View();
        }

        public IActionResult P1()
        {
            return View();
        }


        public JsonResult GetStu()
        {
            var r = db.Students.FirstOrDefault();
            return Json(r);
        }

        public double GetDouble() //action
        {
            return 136.6;
        }

        public string GetStr()
        {
            return "MIS 3033 MVC String";
        }

        StudentDB db = new StudentDB();
        public IActionResult Index()
        {
            return View();
        }

        public JsonResult GD()
        {
            return Json(db.Students);
        }
    }
}
