using HW11.Data;
using HW11.Models;
using Microsoft.AspNetCore.Mvc;

namespace HW11.Controllers
{
    public class HomeController : Controller
    {

        PatientDB db = new PatientDB();

        public JsonResult GetSummary()
        {
            var r = db.Patients.GroupBy(x => x.Bmilevel).Select(x => new {l=x.Key,n=x.Count()});

            return Json(r);
        }

        public JsonResult DeletePatient(string id)
        {
            Message m = new Message();

            Patient patient = db.Patients.Where(x => x.Id == id).FirstOrDefault();

            if (patient == null)
            {
                m.status = "fail";
                m.mes = "Patient does not exist in the DB!";
                return Json(m);
            }


            db.Patients.Remove(patient);
            //db.Patients.Add(patient);
            db.SaveChanges();

            m.status = "success";
            m.mes = "Patient removed successfully!";
            return Json(m);

        }

        //edit
        public JsonResult EditPatient(string id, string name, int age, double bmi, double weight)
        {
            Message m = new Message();

            Patient patient = db.Patients.Where(x=>x.Id == id).FirstOrDefault(); 

            if(patient == null)
            {
                m.status = "fail";
                m.mes = "Patient does not exist in the DB!";
                return Json(m);
            }


            //patient.Id = id;
            patient.Name = name;
            patient.Age = age;
            patient.Bmi = bmi;
            patient.Weight = weight;

            patient.GetBMILevel();

            //db.Patients.Add(patient);
            db.SaveChanges();

            m.status = "success";
            m.mes = "Patient edited successfully!";
            return Json(m);

        }

        public JsonResult AddPatient(string id,string name, int age, double bmi,double weight)
        {
            Message m = new Message();

            Patient patient = new Patient();    
            patient.Id = id;
            patient.Name = name;
            patient.Age = age;
            patient.Bmi = bmi;
            patient.Weight = weight;

            patient.GetBMILevel();

            db.Patients.Add(patient);
            db.SaveChanges();

            m.status = "success";
            m.mes = "Patient added successfully!";
            return Json(m);

        }


        public JsonResult GetPatients()
        {
            var r = db.Patients;
            return Json(r);
        }

        public IActionResult Summary()
        {
            return View();
        }

        public IActionResult Index()
        {
            return View();
        }
    }
}
