using System.Collections.Generic;

namespace WebApplication1.Models
{
    public class User
    {
        public int  Id { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
        public string SearchJobField { get; set; }
        public int JobCount{get;set;}
        public List<string> JobsSentCV { get; set; } // רשימה של שמות משרות שנשלחו אליהן קורות חיים

 public User() 
        {
            JobsSentCV = new List<string>(); // אתחול הרשימה
        }
    }

   
}
