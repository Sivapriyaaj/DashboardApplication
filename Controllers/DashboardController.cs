using Microsoft.AspNetCore.Mvc;
using DashboardApplication.Models;
using DashboardApplication.Data;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;

namespace DashboardApplication.Controllers
{
    public class DashboardController : Controller
    {
        private readonly AdventureWorks2019Context _context;

        public DashboardController(AdventureWorks2019Context context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            
            return View();
        }
        public IActionResult Home()
        {
            Homedata objdata = new Homedata();

            objdata.Addresscount = _context.Addresses.ToList().Count();
            objdata.Personcount = _context.PersonPhones.ToList().Count();
        
            return View(objdata);
        }

        public  async Task<JsonResult> GetGraphData()
        {
            var productlist = from sales in _context.SalesOrderDetails
                              group sales by sales.OrderQty into g
                              select new
                              {
                                  Productname = g.First().Product.Name,
                                  Style = g.Key,
                                  qty = g.Sum(sales => sales.OrderQty)
                              };
            var result = JsonConvert.SerializeObject(productlist.ToList());
            return Json(result);
        }

        public IActionResult RecordList()
        {
            return View();
        }

        }
}
