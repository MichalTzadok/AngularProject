using Microsoft.AspNetCore.Mvc;
using System;
using System.Text.Json;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private static List<User> users;
        private string filePath = Path.Combine("Data", "Users.json");

        public UsersController()
        {

            var jsonString = System.IO.File.ReadAllText(filePath);
            users = JsonSerializer.Deserialize<List<User>>(jsonString);
        }

        [HttpGet("{name}/{password}")]
        public IActionResult Authenticate(string name, string password)
        {
            var user = users.FirstOrDefault(u => u.Name.Equals(name) && u.Password.Equals(password));
            if (user == null)
                return NotFound();
            return Ok(user);
        }

        [HttpPut]
        public void UpdateUser(int userId,string jobName)
        {
            var user = users.FirstOrDefault(u => u.Id == userId);
            if (user != null)
            {           
            user.JobsSentCV.Add( jobName);
            user.JobCount++;
            var options = new JsonSerializerOptions { WriteIndented = true };
            var jsonString = JsonSerializer.Serialize(users, options);
            System.IO.File.WriteAllText(filePath, jsonString);

            }
        }
        

        [HttpGet("{userId}")]
        public IActionResult GetJobCount(int userId)
        {
            var user = users.FirstOrDefault(u => u.Id == userId);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user.JobCount);
        }
        [HttpGet("JobsSentCVs/{userId}")]
        public IActionResult GetJobsSentCVs(int userId)
        {
            var user = users.FirstOrDefault(u => u.Id == userId);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user.JobsSentCV);
        }

       
    }
}
