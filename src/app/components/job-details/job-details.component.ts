import { Component, OnInit,AfterViewInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobsFields } from '../../Models/JobsFields';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit{
  job: any; 

  constructor(private router: Router,private router2: ActivatedRoute, private UserService: UserService) { }
  
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
  getField(){
    return JobsFields

  }
  SendCV() {        
  const currentUser = JSON.parse(String(localStorage.getItem("currentUser")));
  
  this.UserService.updateUser(currentUser.id).subscribe({
    next: () => {
      console.log('User updated successfully');
    },
    error: (error) => {
      console.error('Error updating user: ', error);
    }
  });
window.location.reload()
  console.log(currentUser.jobCount);

}

}