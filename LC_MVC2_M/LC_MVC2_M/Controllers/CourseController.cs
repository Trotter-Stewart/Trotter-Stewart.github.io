using Microsoft.AspNetCore.Mvc;

namespace LC_MVC2_M.Controllers
{
    public class CourseController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
