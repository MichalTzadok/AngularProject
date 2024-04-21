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
        public List<string> JobsSentCV { get; set; } 

 public User() 
        {
            JobsSentCV = new List<string>(); 
        }
    }

   
}
