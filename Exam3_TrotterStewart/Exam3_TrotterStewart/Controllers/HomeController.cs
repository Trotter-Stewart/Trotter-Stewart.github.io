using Microsoft.AspNetCore.Mvc;

namespace Exam3_TrotterStewart.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Summary()
        {
            return View();
        }
    }
}
