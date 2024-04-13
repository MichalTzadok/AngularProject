using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO; 
using System.Text.Json; 
using System.Linq; 
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobsController : ControllerBase
    {
        private static List<Job> jobs;

        public JobsController()
        {
            string filePath = Path.Combine("Data", "Jobs.json");

            var jsonString = System.IO.File.ReadAllText(filePath);
            jobs = JsonSerializer.Deserialize<List<Job>>(jsonString);
        }

        [HttpGet("GetAllJobs")]
        public ActionResult GetAllJobs()
        {
            return Ok(jobs);
        }

        [HttpGet("unique-areas")]
        public ActionResult<IEnumerable<string>> GetUniqueAreas()
        {
            var uniqueAreas = jobs.Select(job => job.JobArea).Distinct().ToList();
            return Ok(uniqueAreas);
        }

        [HttpGet("unique-fields")]
        public ActionResult<IEnumerable<string>> GetUniqueFields()
        {
            var uniqueFields = jobs.Select(job => job.JobField.ToString()).Distinct().ToList();
            return Ok(uniqueFields);
        }
    }
}
