using Microsoft.EntityFrameworkCore;

namespace DashboardApplication.Data
{
    public class Datacontext: DbContext
    {
        public Datacontext(DbContextOptions<Datacontext> options) : base(options)
        {

        }
    }
}
