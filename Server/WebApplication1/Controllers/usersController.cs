using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
       private static List<User> users = new List<User>()
            {
                new User { Id = 1, Name = "Michal", Password = "michal123", SearchJobField = "Software_Development",JobCount=0 },
                new User { Id = 2, Name = "Tamar", Password = "tamar123", SearchJobField = "Healthcare",JobCount=0 },
                new User { Id = 3, Name = "Elchanan", Password = "elchanan456", SearchJobField = "Finance" ,JobCount=0},
                new User { Id = 4, Name = "Avital", Password = "avital789", SearchJobField = "Engineering",JobCount=0 },
                new User { Id = 5, Name = "Inon", Password = "inon321", SearchJobField = "Retail_and_Sales" ,JobCount=0}
            };
       
// GET api/user/authenticate
       [HttpGet("{name}/{password}")]
        public  IActionResult Authenticate(string name,string password)
        {
          var user=  users.FirstOrDefault(u => u.Name.Equals(name) && u.Password.Equals(password));
        if(user==null)
        return NotFound();
        return Ok(user);
        }
         [HttpPut]    
         public void UpdateUser(int userId)
        {
            User user = users.FirstOrDefault(u => u.Id == userId);

            if (!(user == null))
            {
                user.JobCount ++;

            }
        }
        [HttpGet("{userId}")]
        public IActionResult getJobCount(int userId)
        {
            User user = users.FirstOrDefault(u => u.Id == userId);

            if (user == null)
            {
                return NotFound();
            }

            return Ok(user.JobCount);
        }

        // [HttpGet("GetCourseByName")]
        // public ActionResult GetCourseByName(string name)
        // {System.Console.WriteLine("gh");
        //     var course = courses.Find(c => c.name == name);
        //     if (course == null)
        //     {
        //         return NotFound();
        //     }
        //     return Ok(course);
        // }
    }
}
