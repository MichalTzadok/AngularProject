namespace WebApplication1.Models

{
    public class Job
    {public int Id{ get; set; }
        public JobsFields JobField { get; set; }
        public string JobName { get; set; }
        public int NumHours { get; set; }
        public string JobArea { get; set; }
        public string Requirements { get; set; }
         public bool HomeWorking { get; set; }

    }

    public enum JobsFields
    {
        Software_Development,
        Healthcare,
        Finance,
        Hospitality_and_Tourism,
        Retail_and_Sales,
        Human_Resources,
        Engineering,
            }
}
