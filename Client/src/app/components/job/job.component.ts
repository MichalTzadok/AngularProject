import { Component, EventEmitter, Input, Output } from '@angular/core';
import {  Job} from "../../Models/Job";
import { JobsFields } from "../../Models/JobsFields";
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../Services/user.service';
@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrl: './job.component.scss'
})
export class JobComponent  {
  constructor(private route: ActivatedRoute, private UserService: UserService ) { }

@Input()jobData:Job|null=null
// @Output() joinClick = new EventEmitter<any>()
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

getField(){
  return JobsFields
}
}
