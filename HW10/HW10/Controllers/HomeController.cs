using HW10.Data;
using HW10.Models;
using Microsoft.AspNetCore.Mvc;

namespace HW10.Controllers
{
    public class HomeController : Controller
    {

        OrderDB db = new OrderDB();

        public JsonResult GetLevelSubtotalSum()
        {
            var r = db.Orders.GroupBy(x => x.Level).Select(x => new {l=x.Key,s=x.Sum(a=>a.Subtotal)}).OrderBy(x=>x.l);

            return Json(r);
        }

        public JsonResult DeleteOrder(string id)
        {
            Message m = new Message();

            Order order=db.Orders.Where(x=>x.Id==id).FirstOrDefault(); 

            if(order==null)
            {
                m.status = "fail";
                m.mes = "Order does not exist in DB!";
                return Json(m);
            }

            db.Orders.Remove(order);

            db.SaveChanges();

            m.status = "success";
            m.mes = "order deleted successfully!";
            return Json(m);


        }

        public JsonResult EditOrder(string id, int ncog, int ngear)
        {
            Order order = db.Orders.Where(x => x.Id == id).FirstOrDefault();
            Message m = new Message();
            if (order == null)
            {
                m.status = "fail";
                m.mes = "Order does not exist in db";
                return Json(m);
            }


            //order.Id = id;
            order.NGears = ngear;
            order.NCogs = ncog;

            //subtotal
            order.CalSubtotal();
            // subtotal level
            order.CalSubtotalLevel();

            //db.Orders.Add(order);

            db.SaveChanges();

            
            m.mes = "New Order Edited Successfully";
            return Json(m);
        }

        public JsonResult AddOrder(string id,int ncog,int ngear)
        {
            Order order = new Order();
            order.Id = id;
            order.NGears = ngear;
            order.NCogs = ncog;

            //subtotal
            order.CalSubtotal();
            // subtotal level
            order.CalSubtotalLevel();

            db.Orders.Add(order);

            db.SaveChanges();

            Message m = new Message();
            m.mes = "New Order Added Successfully";
            return Json(m);
        }

       public JsonResult GetOrders()
        {
            var r = db.Orders;
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
