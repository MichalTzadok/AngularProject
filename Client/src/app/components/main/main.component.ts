import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../Services/user.service';
import 'jquery';
import 'bootstrap';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  redirectToLoginClicked: boolean = false;// Indicates if the login redirection button was clicked
  userId: number = -1;// ID of the current user
  userName: string | null = null;// Name of the current user
  numOfCVs: number = 0;// Number of CVs sent by the user
  isUser: boolean = false;// Determines if a user is logged in
  showenJobs: boolean = false;// Controls the visibility of job listings
  showenMyJobsSent: boolean = false;// Controls the visibility of "My Jobs Sent" section
  searchJobField: string | null = null;// User's job field for job searches
  constructor(private userService: UserService, private router: Router) { }

  // Initializes the component by retrieving user-related information from local storage and making service calls
  ngOnInit(): void {
    this.userName = JSON.parse(localStorage.getItem("userName") || 'null');
    if (this.userName !== "null" && this.userName !== null) {
      this.isUser = true;// A user is logged in
      const userIdString = localStorage.getItem("userId");
      if (userIdString !== "null" && userIdString !== null) {
        this.userId = parseInt(userIdString)// Convert the ID to an integer
        // Fetch the number of CVs sent by the user
        this.userService.getNumOfCVsSent(this.userId).subscribe({
          next: (data: number) => {
            const numCVs = localStorage.getItem("CVs");
            localStorage.setItem('CVs', (data).toString());// Store the data in local storage
            this.numOfCVs = parseInt(localStorage.getItem("CVs")!);// Update the component's state
          },
          error: (error: any) => {
            console.error('Error fetching job count: ', error);
          }
        });

        // Retrieve the job field from local storage for personalized job search
        this.searchJobField = JSON.parse(localStorage.getItem('searchJobField') || "");
      }
    }


  }
  // Toggles the display of job listings and navigates to the job list
  showJobs() {
    this.showenJobs = !this.showenJobs;
    this.router.navigate(['/jobsList']);
  }
  // Navigates to the "Jobs Sent CV" page
  showMyJobsSent() {
    // this.showenMyJobsSent = !this.showenMyJobsSent;
    this.router.navigate(['jobs-cent-cv']);

  }
  // Redirects to the login page
  login() {
    this.router.navigate(['/login']);
  }
  // Toggles the state for redirect to login
  redirectToLogin() {
    this.redirectToLoginClicked = !this.redirectToLoginClicked;
  }
}

