using Microsoft.AspNetCore.Mvc;

namespace LC_MVC2_M.Controllers
{
    public class SummaryController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
