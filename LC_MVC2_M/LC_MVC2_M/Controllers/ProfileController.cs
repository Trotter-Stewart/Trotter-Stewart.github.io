using LC_MVC2_M.Data;
using LC_MVC2_M.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Diagnostics;

namespace LC_MVC2_M.Controllers
{
    public class ProfileController : Controller
    {

        StuDB db = new StuDB();

        public JsonResult AddP(string sid, double h, double w, string c)
        {
            Profile pro;

            pro = db.Profiles.Where(x=>x.StudentId==sid).FirstOrDefault();

            if(pro != null)
            {
                return Json(new {status="fail",mes=$"Student ID {sid} profile already exist in DB!"});
            }

            pro = new Profile();

            pro.StudentId = sid;

            pro.Weight = w;
            pro.Height = h;
            pro.Fcolor = c;


            pro.Address = "OU";
            pro.Lat = 0;
            pro.Lon = 0;
            pro.Created = "";

            db.Profiles.Add(pro);

            db.SaveChanges();// persist

            return Json(new {status="success", mes=$"Student ID {sid} profile success"});



        }

        public JsonResult GetPS()
        {
            var r = db.Profiles;
            return Json(r);
        }

        public JsonResult GetStus()
        {
            var r = db.Students.Select(x => new { id = x.Id, name = x.Name });
            return Json(r);
        }

        public IActionResult Index()
        {
            return View();
        }
    }
}
