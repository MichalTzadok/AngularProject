import { Component, OnInit } from '@angular/core';
import { JobService } from '../../Services/job.service';
import { Job } from '../../Models/Job';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../Services/user.service';


@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrl: './jobs-list.component.scss'
})
export class JobsListComponent implements OnInit {
  jobsList: Job[] = [];
  filteredJobs: Job[] = [];
  uniqueFields: string[] = [];
  uniqueAreas: string[] = [];
  filterOption: string = 'all';
  filterValueArea: string = 'New York';
  filterValueField: string = 'Software_Development';
  filterByUserField:boolean=false;
  constructor(private jobSvc: JobService, private router: Router, private UserService: UserService, private activatedRoute: ActivatedRoute) {
    if (localStorage.getItem("userName")) {
      this.jobsList = this.jobSvc.JobsList
    }
    else {
      alert("It is not possible to enter the page without logging in🤔")
      this.router.navigate(['../login'])
    }
  }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const jobField = params.get('field');
      if (jobField) {
        this.filterOption='field';
        this.filterValueField=jobField;
        this.uniqueFields = this.jobSvc.uniqueFields
        this.filterByUserField=!this.filterByUserField
        this.filteredJobs = this.jobSvc.filterJobsByField(this.filterValueField);
      }
    });

    this.uniqueFields = this.jobSvc.uniqueFields
    this.uniqueAreas = this.jobSvc.uniqueAreas

  }
  filterJobs() {
    if (this.filterOption === 'area') {
      this.filteredJobs = this.jobSvc.filterJobsByArea(this.filterValueArea);

    }
    else
      if (this.filterOption === 'field') {
        this.filteredJobs = this.jobSvc.filterJobsByField(this.filterValueField);
      }

    this.router.navigate(['/jobsList'])
  
  }
  viewJobDetails(job: Job) {
    this.router.navigate(['/jobs', job.id], {
      queryParams: {
        jobField: job.jobField,
        jobName: job.jobName,
        numHours: job.numHours,
        jobArea: job.jobArea,
        requirements: job.requirements,
        homeWorking: job.homeWorking
      }
    });


  }

}

