import { Injectable } from "@angular/core";
import { Job } from "../Models/Job";
import { HttpClient } from "@angular/common/http";
import { JobsFields } from "../Models/JobsFields";

@Injectable({
  providedIn: 'root',
})
export class JobService {
  private jobs: Job[] = [];//`jobs`: An array of `Job` objects representing all available jobs.
  uniqueAreas: string[] = [];//An array of unique job areas retrieved from the server.
  uniqueFields: string[] = []//An array of unique job fields retrieved from the server.


  // - Calls methods to retrieve job data, unique job areas, and unique job fields from the server when the service is instantiated.
  constructor(private http: HttpClient) {
    this.getJobsFromServer();
    console.log(this.jobs);
    this.getUniqueAreasFromServer();
    this.getUniqueFieldsFromServer();

  }


  //Sends an HTTP GET request to retrieve all jobs from the server.
  // - Updates the `jobs` array with the data from the server.
  getJobsFromServer() {
    this.http.get('https://localhost:5002/api/Jobs/GetAllJobs').subscribe((res: any) => {
      res.forEach((e: any) => { this.jobs.push(e) });
    })
  }


  // - A getter method that returns the list of all jobs.
  public get JobsList() {
    return this.jobs
  }


  //    - Filters the `jobs` array to return only jobs with a specific `jobArea`.
  filterJobsByArea(jobArea: string): Job[] {
    return this.jobs.filter(job => job.jobArea === jobArea);
  }


  //Filters the `jobs` array to return only jobs with a specific `jobField`.
  // - Uses `JobsFields` to determine the correct field value.
  filterJobsByField(field: string): Job[] {
    const value = Object.values(JobsFields).indexOf(field);
    return this.jobs.filter(job => {
      if (job.jobField === value)
        console.log(job.jobField);

      return job.jobField === value;
    });
  }


  //Sends an HTTP GET request to retrieve unique job areas from the server.
  // - Updates the `uniqueAreas` array with the data from the server.
  getUniqueAreasFromServer() {
    this.http.get('https://localhost:5002/api/Jobs/unique-areas').subscribe((res: any) => {
      res.forEach((e: any) => { this.uniqueAreas.push(e) });
    });
  }


  //Sends an HTTP GET request to retrieve unique job fields from the server.
  // - Updates the `uniqueFields` array with the data from the server.
  getUniqueFieldsFromServer() {
    this.http.get('https://localhost:5002/api/Jobs/unique-fields').subscribe((res: any) => {
      res.forEach((e: any) => { this.uniqueFields.push(e) });

    });
  }




}