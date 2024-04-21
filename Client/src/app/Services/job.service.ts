import { Injectable } from "@angular/core";
import { Job } from "../Models/Job";
import { HttpClient } from "@angular/common/http";
import { JobsFields } from "../Models/JobsFields";

@Injectable({
  providedIn: 'root',
})
export class JobService {
  private jobs: Job[] = [];
  uniqueAreas: string[] = [];
  uniqueFields: string[] = []
  constructor(private http: HttpClient) {
    this.getJobsFromServer();
    console.log(this.jobs);
    this.getUniqueAreasFromServer();
    this.getUniqueFieldsFromServer();

  }

  getJobsFromServer() {
    this.http.get('https://localhost:5002/api/Jobs/GetAllJobs').subscribe((res: any) => {
      res.forEach((e: any) => { this.jobs.push(e) });
    })
  }

  public get JobsList() {
    return this.jobs
  }

  filterJobsByArea(jobArea: string): Job[] {
    return this.jobs.filter(job => job.jobArea === jobArea);
  }
  filterJobsByField(field: string): Job[] {
    const value = Object.values(JobsFields).indexOf(field);
    return this.jobs.filter(job => { 
      if(job.jobField === value)
      console.log(job.jobField);
      
      return job.jobField === value;
    });
  }

  getUniqueAreasFromServer() {
    this.http.get('https://localhost:5002/api/Jobs/unique-areas').subscribe((res: any) => {
      res.forEach((e: any) => { this.uniqueAreas.push(e) });
    });
  }
  getUniqueFieldsFromServer() {
    this.http.get('https://localhost:5002/api/Jobs/unique-fields').subscribe((res: any) => {
      res.forEach((e: any) => { this.uniqueFields.push(e) });

    });
  }




}