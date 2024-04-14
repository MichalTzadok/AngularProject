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
  redirectToLoginClicked: boolean = false;
  userId: number =-1;
  userName: string | null = null;
  numOfCVs: number = 0;
  isUser: boolean = false;
  numOfCVsFromServer: any;
  showen: boolean = false;
  count: any;

  constructor(private userService: UserService, private router: Router) {}
  ngOnInit(): void {
    this.userName = JSON.parse(localStorage.getItem("userName") || 'null');
    if (this.userName !== "null" && this.userName !==null) {
      this.isUser = true;
      const userIdString=localStorage.getItem("userId") ;
      if(userIdString!=="null" && userIdString!==null ){
      this.userId=parseInt(userIdString)
      this.count = this.userService.getNumOfCVsSent(this.userId).subscribe({
        next: (data: number) => {
          const numCVs = localStorage.getItem("CVs");
          console.log(numCVs );
          localStorage.setItem('CVs', (data).toString());
          this.numOfCVs = parseInt(localStorage.getItem("CVs")!);
        },
        error: (error: any) => {
          console.error('Error fetching job count: ', error);
        }
      });
     
    }
    }
  

  }

  showJobs() {
    this.showen = !this.showen;
    this.router.navigate(['/jobsList']);
  }

  login() {
    this.router.navigate(['/login']);
  }

  redirectToLogin() {

    this.redirectToLoginClicked = !this.redirectToLoginClicked;
  }
}










