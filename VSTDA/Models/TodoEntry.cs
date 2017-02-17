using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace VSTDA.Models
{
    public class TodoEntry
    {
        //primary key
        public int TodoEntryId { get; set; }

        //additional columns
        public string Text { get; set; }
        public string Priority { get; set; }
        public DateTime CreatedDate { get; set; }

    }


}