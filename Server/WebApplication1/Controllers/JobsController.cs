using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobsController : ControllerBase
    {
       private static List<Job> jobs = new List<Job>()
        {
            new Job {Id=0, JobField = JobsFields.Software_Development, JobName = "Software Engineer", NumHours = 40, JobArea = "New York", Requirements = "Bachelor's degree in Computer Science", HomeWorking = true },
            new Job {Id=1, JobField = JobsFields.Healthcare, JobName = "Nurse", NumHours = 36, JobArea = "Los Angeles", Requirements = "RN license", HomeWorking = false },
            new Job {Id=2, JobField = JobsFields.Finance, JobName = "Financial Analyst", NumHours = 40, JobArea = "Chicago", Requirements = "Bachelor's degree in Finance or Accounting", HomeWorking = true },
            new Job { Id=3,JobField = JobsFields.Hospitality_and_Tourism, JobName = "Hotel Manager", NumHours = 45, JobArea = "Miami", Requirements = "Previous management experience", HomeWorking = false },
            new Job { Id=4,JobField = JobsFields.Retail_and_Sales, JobName = "Sales Associate", NumHours = 30, JobArea = "San Francisco", Requirements = "Customer service skills", HomeWorking = false },
            new Job {Id=5, JobField = JobsFields.Human_Resources, JobName = "HR Specialist", NumHours = 38, JobArea = "Dallas", Requirements = "Bachelor's degree in Human Resources", HomeWorking = true },
            new Job { Id=6,JobField = JobsFields.Engineering, JobName = "Mechanical Engineer", NumHours = 42, JobArea = "Boston", Requirements = "Bachelor's degree in Mechanical Engineering", HomeWorking = true },
            new Job { Id=7,JobField = JobsFields.Software_Development, JobName = "Frontend Developer", NumHours = 40, JobArea = "Seattle", Requirements = "Experience with JavaScript and HTML/CSS", HomeWorking = true },
            new Job {Id=8, JobField = JobsFields.Healthcare, JobName = "Physical Therapist", NumHours = 35, JobArea = "Denver", Requirements = "Doctor of Physical Therapy degree", HomeWorking = false },
            new Job {Id=9, JobField = JobsFields.Finance, JobName = "Accountant", NumHours = 40, JobArea = "Houston", Requirements = "CPA certification", HomeWorking = true }
        };
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
