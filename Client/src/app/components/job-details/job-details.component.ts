import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobsFields } from '../../Models/JobsFields';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {
  job: any;// Stores the details of the current job

  constructor(private router: Router, private router2: ActivatedRoute, private UserService: UserService) { }
  // Lifecycle hook that initializes the component.
  //  Fetches job details from the route parameters and stores them in `job`.
  ngOnInit(): void {
    this.router2.queryParams.subscribe(params => {
      this.job = {
        id: params['id'],
        field: params['jobField'],
        name: params['jobName'],
        hours: params['numHours'],
        area: params['jobArea'],
        requirements: params['requirements'],
        homeWorking: params['homeWorking']
      };

    });

  }
  // Function to return job fields/categories
  getField() {
    return JobsFields

  }
  // Sends a CV (Curriculum Vitae) for the current job.
  // Updates the user's record to reflect the job application.
  // Upon success, navigates back to the job list.
  SendCV() {
    const userId = JSON.parse(String(localStorage.getItem("userId")));
    console.log(this.UserService.jobsSentCVs);
    this.UserService.updateUser(userId, this.job.name).subscribe({
      next: () => {
        console.log('User updated successfully');
        this.router.navigate(['/jobsList']);

      },
      error: (error) => {
        console.error('Error updating user: ', error);
      }
    });



  }

}
