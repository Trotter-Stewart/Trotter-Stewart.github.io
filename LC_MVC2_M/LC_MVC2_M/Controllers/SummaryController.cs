using LC_MVC2_M.Data;
using Microsoft.AspNetCore.Mvc;

namespace LC_MVC2_M.Controllers
{
    public class SummaryController : Controller
    {
        StuDB db = new StuDB();

        public JsonResult GetSummary(string cid = "MIS3033")
        {
            var r = db.Enrollments.Where(x=>x.CourseId == cid).GroupBy(x=>x.LetterGrade).Select(x=>new {L=x.Key,N=x.Count(), }).OrderBy(x=>x.L);
            return Json(r);
        }

        public JsonResult GetCourses()
        {
            var r = db.Courses;
            return Json(r);

        }

        public IActionResult Index()
        {
            return View();
        }
    }
}
