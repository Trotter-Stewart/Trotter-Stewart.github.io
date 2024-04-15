using LC_MVC2_M.Data;
using Microsoft.AspNetCore.Mvc;


namespace LC_MVC2_M.Controllers
{
    public class HomeController : Controller
    {

        StuDB db = new StuDB();// create database connection

        public JsonResult GetStus()
        {
           // var r = db.Students;
            var r = from stu in db.Students
                    select new {ID=stu.Id,Name=stu.Name,DOB=stu.Dob};
            return Json(r);
        }

        public JsonResult ComMutTbl() // Web API actions
        {

            var r = from stu in db.Students
                    join enroll in db.Enrollments on stu.Id equals enroll.StudentId
                    join course in db.Courses on enroll.CourseId equals course.Id

                    select new {ID = stu.Id, Name=stu.Name, Course=course.Name,Grade=enroll.Grade, LG=enroll.LetterGrade}
                    ;

            return Json(r);
        }

        public IActionResult Index()
        {
            return View();
        }
    }
}
