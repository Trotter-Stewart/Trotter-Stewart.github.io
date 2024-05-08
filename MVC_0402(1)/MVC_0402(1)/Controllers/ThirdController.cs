using Microsoft.AspNetCore.Mvc;
using MVC_0402_1_.Data;
using MVC_0402_1_.Models;

namespace MVC_0402_1_.Controllers
{
    public class ThirdController : Controller
    {
        StudentDB db = new StudentDB();


        public JsonResult EditStu(int age,double grade,string id,string name )
        {

            var r = db.Students.Where(x=>x.Id==id).FirstOrDefault();

            var r2 = new {status="edit",mes="Test"};

            if(r==null)
            {
                var r3 = new { status = "fail", mes = "student id does not exsist" };
                return Json(r3);
            }
            else
            {
                r.Name = name;
                r.Age = age;
                r.Grade = grade;

                db.SaveChanges();
                var r3 = new { status = "success", mes = "student id exsists, edited" };
                return Json(r3);
            }

            return Json(r2);
        }


        public JsonResult AddStu(string id,string name,int age,double grade) //function, action, webAPI
        {
            Student stu = new Student();
            stu.Id = id;
            stu.Name = name;
            stu.Age = age;
            stu.Grade = grade;
            stu.LetterGrade = "";

            db.Students.Add(stu);
            db.SaveChanges();

            int n = db.Students.Count();

            return Json(new {n=n, mes = $"{id},{name},{age},{grade:F2}", });
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}
