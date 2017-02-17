using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using VSTDA.Models;

namespace VSTDA.Infrastructure
{
    public class TodoDataContext : DbContext
    {
        public TodoDataContext() : base("TodoTable")
        {

        }

        public IDbSet<TodoEntry> TodoEntries { get; set; }

    }
}