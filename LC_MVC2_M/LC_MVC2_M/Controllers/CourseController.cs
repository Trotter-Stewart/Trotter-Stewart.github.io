using LC_MVC2_M.Data;
using Microsoft.AspNetCore.Mvc;

namespace LC_MVC2_M.Controllers
{
    public class CourseController : Controller
    {
        StuDB db = new StuDB();

        public JsonResult GetN()
        {
            var r = db.Enrollments.GroupBy(x=>x.CourseId).Select(x=>new {c=x.Key, n=x.Count(),});
            return Json(r);
        }

        public IActionResult Index()
        {
            return View();
        }
    }
}
