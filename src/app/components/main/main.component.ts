import { Component, OnInit } from '@angular/core';
import { JobService } from '../../Services/job.service';
import { Job } from '../../Models/Job';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  constructor(private UserService: UserService,private router: Router) { }
  redirectToLoginClicked: boolean = false;
  userName = localStorage.getItem("userName")
  currentUser = JSON.parse(String(localStorage.getItem("currentUser")))
  numOfCVs!: number;
  isUser: boolean = false;
  numOfCVsFromServer: any;
  showen: boolean = false;
  count!: any

  ngOnInit(): void {
 this.currentUser = JSON.parse(String(localStorage.getItem("currentUser")))
    if (!(String(this.currentUser) === "null"))  {
      this.isUser = true;
      
      let userName = localStorage.getItem("userName");
      if (userName) {
        this.count = this.UserService.getNumOfCVsSent(this.currentUser.id).subscribe({
          next: (data: number) => {
            this.numOfCVs = data;
          },
          error: (error: any) => {
            console.error('Error fetching job count: ', error);
          }
        });
      }
     
    }    
    
   
  }
    // if (!(String(this.currentUser) === "null")) {
      // this.isUser = true;
      // let userName = localStorage.getItem("userName");
      // if (userName) {
        // this.UserService.valueChanged.subscribe(() => {
        //   this.numOfCVsFromServer = this.UserService.getNumOfCVsSent(this.currentUser.id).subscribe({
        //     next: (numOfCVs: number) => {
        //       this.numOfCVs = numOfCVs;
        //     },
        //     error: (error: any) => {
        //       console.error('Error Fetching Get numOfCVs: ', error);
        //     }
        //   });
        // }); 
      //   this.UserService. getNumOfCVsSent(this.currentUser.id).subscribe(data => {
      //     this.numOfCVs = data;
      //     console.log( this.numOfCVs);
          
      //   });
      // }
      // }
      // this.numOfCVsFromServer = this.UserService.getNumOfCVsSent(this.currentUser.id).subscribe({
      //   next: (numOfCVs: number) => {
      //     this.numOfCVs = numOfCVs;
      //   },
      //   error: (error: any) => {
      //     console.error('Error Fetching Get numOfCVs: ', error);
      //   }
      // });
    // }
  
  showJobs(){
    this.showen=!this.showen;
    this.router.navigate(['/jobsList']);
  }
  login(){    
    this.router.navigate(['/login']);
  }
  
  redirectToLogin(){
    this.redirectToLoginClicked=!this.redirectToLoginClicked;
  }
}





