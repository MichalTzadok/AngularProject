import { Component, OnInit } from '@angular/core';
import { JobService } from '../../Services/job.service';
import { Job } from '../../Models/Job';
import { Router } from '@angular/router';
import { UserService } from '../../Services/user.service';
import { JobsFields } from '../../Models/JobsFields';


@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrl: './jobs-list.component.scss'
})
export class JobsListComponent implements OnInit {
  jobsList:Job[] = [];
  filteredJobs: Job[] = [];
   uniqueFields: string[]=[];
   uniqueAreas:string[]=[];
  filterOption: string = 'all';
  filterValueArea:string='New York';
  filterValueField:string='Software_Development';
constructor(private jobSvc:JobService, private router: Router,private UserService: UserService){
}
  ngOnInit(): void {

    this.jobsList=this.jobSvc.JobsList
     this.uniqueFields=this.jobSvc.uniqueFields
     this.uniqueAreas = this.jobSvc.uniqueAreas
     
  }


// saveToList($event: any){
//   this.FilteredJobs.push($event)
// }
filterJobs(){
if (this.filterOption === 'area') {
    this.filteredJobs = this.jobSvc.filterJobsByArea(this.filterValueArea);
} 
else
if (this.filterOption === 'field') {
    this.filteredJobs = this.jobSvc.filterJobsByField(this.filterValueField);  
}
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
      // ,showSendCVButton: showSendCVButton
    } 
  } );


}
// SendCV() {        
//   // this.joinClick.emit(this.jobData?.jobName)
//   // alert("הרישום בוצע בהצלחה!")
// const currentUser = JSON.parse(String(localStorage.getItem("currentUser")))
// console.log(currentUser.jobCount);

// this.UserService.updateUser(currentUser.id).subscribe({
//   next: () => {
//     console.log('User updated successfully');
//   },
//   error: (error) => {
//     console.error('Error updating user: ', error);
//   }
// });
// window.location.reload()

// }
}

