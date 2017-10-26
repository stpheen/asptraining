using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using Iam.Payroll.Common;
using Iam.Payroll.Data.Models;
using System;

namespace Iam.Payroll.Services
{
    public class HolidayService
    {
        readonly IHolidayRepository repo;

        public HolidayService(IHolidayRepository repo)
        {
            this.repo = repo;
        }

        public List<HolidayEx> GetAll(string where = "")
        {
            return repo.GetAll(where);
        }

        public List<HolidayEx> GetPaged(string where = "", int? TypeId = null, string orderby = "", int PageNo = 1, int PageSize = 10)
        {
            return repo.GetPaged(where, TypeId, orderby, PageNo, PageSize);
        }

        public int Count(string where, int? TypeId = null)
        {
            return repo.Count(where, TypeId);
        }


        public HolidayEx Get(int Id)
        {
            return repo.Get(Id);
        }

        public HolidayEx Add(HolidayEx item)
        {
            return repo.Add(item);
        }


        public HolidayEx Update(HolidayEx item)
        {
            return repo.Update(item);
        }


        public void Remove(HolidayEx item)
        {
            repo.Remove(item);
        }

        //REPOSITORYEF
        public void Create()
        {
            repo.Create();
        }
    }
}
