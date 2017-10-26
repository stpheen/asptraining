using System.Collections.Generic;

namespace Iam.Payroll.Common
{
    public interface IHolidayRepository  : IRepository<HolidayEx>
    {
        List<HolidayEx> GetAll(string where);
        List<HolidayEx> GetPaged(string where = "", int? TypeId = null, string orderby = "", int PageNo = 1, int PageSize = 10);
        HolidayEx Get(int Id);
        int Count(string where, int? TypeId = null);

    }
}
