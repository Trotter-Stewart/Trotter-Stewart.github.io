using Microsoft.AspNetCore.Mvc;
using MVC_0402_1_.Data;

namespace MVC_0402_1_.Controllers
{
    public class HomeController : Controller
    {
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
