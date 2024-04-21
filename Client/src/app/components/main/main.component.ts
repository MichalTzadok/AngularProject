import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  redirectToLoginClicked: boolean = false;
  userId: number = -1;
  userName: string | null = null;
  numOfCVs: number = 0;
  isUser: boolean = false;
  showenJobs: boolean = false;
  showenMyJobsSent: boolean = false;
  userJobsSent: any;
  searchJobField: string | null = null;
  constructor(private userService: UserService, private router: Router) { }


  ngOnInit(): void {
    this.userName = JSON.parse(localStorage.getItem("userName") || 'null');
    if (this.userName !== "null" && this.userName !== null) {
      this.isUser = true;
      this.userJobsSent = this.userService.jobsSentCVs;
      const userIdString = localStorage.getItem("userId");
      if (userIdString !== "null" && userIdString !== null) {
        this.userId = parseInt(userIdString)
        this.userService.getNumOfCVsSent(this.userId).subscribe({
          next: (data: number) => {
            const numCVs = localStorage.getItem("CVs");
            localStorage.setItem('CVs', (data).toString());
            this.numOfCVs = parseInt(localStorage.getItem("CVs")!);
            console.log(numCVs);

          },
          error: (error: any) => {
            console.error('Error fetching job count: ', error);
          }
        });
        this.userService.getJobsSentCVs(this.userId).subscribe({
          next: (data: string[]) => {
            const userJobsSent = localStorage.getItem("jobsSentCV");
            console.log(userJobsSent);
            localStorage.setItem('jobsSentCV', JSON.stringify(data));
            this.userJobsSent = JSON.parse(localStorage.getItem("jobsSentCV") || "[]");
            console.log(this.userJobsSent);

          },
          error: (error: any) => {
            console.error('Error fetching job count: ', error);
          }
        });

        this.searchJobField = JSON.parse(localStorage.getItem('searchJobField') || "");
      }
    }


  }

  showJobs() {
    this.showenJobs = !this.showenJobs;
    this.router.navigate(['/jobsList']);
  }
  showMyJobsSent() {
    this.showenMyJobsSent = !this.showenMyJobsSent;

  }
  login() {
    this.router.navigate(['/login']);
  }

  redirectToLogin() {
    this.redirectToLoginClicked = !this.redirectToLoginClicked;
  }
}

