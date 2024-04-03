using Microsoft.AspNetCore.Mvc;
using MVC_0402_1_.Data;

namespace MVC_0402_1_.Controllers
{
    public class BController : Controller
    {// B
        StudentDB db = new StudentDB();
        public JsonResult GetStus()
        {
            var r = db.Students.Where(x => x.Grade >= 80);
            return Json(r);
        }

        public IActionResult Index() // function, action, web page
        {
            return View();
        }
    }
}
