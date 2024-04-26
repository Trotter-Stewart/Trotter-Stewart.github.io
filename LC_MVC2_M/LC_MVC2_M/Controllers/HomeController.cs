using LC_MVC2_M.Data;
using LC_MVC2_M.Models;
using Microsoft.AspNetCore.Mvc;


namespace LC_MVC2_M.Controllers
{
    public class HomeController : Controller
    {

        StuDB db = new StuDB();// create database connection
        //delete
        public JsonResult DeleteStu(string sid)       //, string sname, string place, string dob, double lat, double lon)
        {

            Student stu;

            stu = db.Students.Where(x => x.Id == sid).FirstOrDefault(); //check if already exists

            if (stu == null)// No Such Student Record
            {
                return Json(new { status = "fail", mes = $"Student ID {sid} DOES NOT exist in the database!" });
            }
            //stu = new Student();  WE DO NOT ADD A NEW STUDENT

            //stu.Id = sid; // can not edit or modify the primary key
            //stu.Name = sname;
            //stu.FavPlace = place;
            //stu.Dob = dob;
            //stu.Lat = lat;
            //stu.Lon = lon;

            //db.Students.Add(stu);// add to the table RAM

            db.Students.Remove(stu);

            db.SaveChanges();// persist save to file

            return Json(new { status = "success", mes = $"Student ID {sid} deleted successfully!" });


        }


        //edit student
        public JsonResult EditStu(string sid, string sname, string place, string dob, double lat, double lon)
        {

            Student stu;

            stu = db.Students.Where(x => x.Id == sid).FirstOrDefault(); //check if already exists

            if (stu == null)// No Such Student Record
            {
                return Json(new { status = "fail", mes = $"Student ID {sid} DOES NOT exist in the database!" });
            }
            //stu = new Student();  WE DO NOT ADD A NEW STUDENT

            //stu.Id = sid; // can not edit or modify the primary key
            stu.Name = sname;
            stu.FavPlace = place;
            stu.Dob = dob;
            stu.Lat = lat;
            stu.Lon = lon;

            //db.Students.Add(stu);// add to the table RAM

            db.SaveChanges();// persist save to file

            return Json(new { status = "success", mes = $"Student ID {sid} edited successfully!" });


        }


        //add student
        public JsonResult AddStu(string sid, string sname, string place, string dob, double lat, double lon)
        {
            
                Student stu;

                stu = db.Students.Where(x => x.Id == sid).FirstOrDefault(); //check if already exists

                if (stu != null)
                {
                    return Json(new { status = "fail", mes = $"Student ID {sid} already exists in the database!" });
                }
                stu = new Student();

                stu.Id = sid;
                stu.Name = sname;
                stu.FavPlace = place;
                stu.Dob = dob;
                stu.Lat = lat;
                stu.Lon = lon;

                db.Students.Add(stu);// add to the table RAM

                db.SaveChanges();// persist save to file

                return Json(new { status = "success", mes = $"Student ID {sid} added successfully!" });
            
            
        }
            public JsonResult GetAllStus() //funtion, action, Web API
        {
            var r = db.Students.Select(x => new
            {
                id=x.Id,
                name=x.Name,
                dob=DateTime.Parse(x.Dob).ToString("yyyy-MM-dd"),
                favPlace=x.FavPlace,
                lat=x.Lat,
                lon=x.Lon,
            });
            return Json(r);
        }


        //
        public JsonResult GetC() //function, action, WebApi
        {
            //var r = db.Courses.Where(x=>x.Id.Contains("33")).Select(x=>new {cid=x.Id,cn=x.Name, cHours=x.CreditHours});
            var r = from x in db.Courses
                    where x.Id.Contains("33")
                    select new {cid=x.Id,cn=x.Name,cHours=x.CreditHours,};



                ;
            return Json(r);
        }


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
