import { Component } from '@angular/core';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-jobs-sent-cv',
  templateUrl: './jobs-sent-cv.component.html',
  styleUrl: './jobs-sent-cv.component.scss'
})
export class JobsSentCvComponent {
  userJobsSent: any;  // Stores the jobs for which the user has sent a CV
  userId: number = -1;  // Holds the ID of the current user
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // Retrieve user ID from local storage
    const userIdString = localStorage.getItem("userId");
    this.userId = parseInt(userIdString!)// Convert the ID to a number
    this.userJobsSent = this.userService.jobsSentCVs;
    // Get jobs where the user has sent a CV
    this.userService.getJobsSentCVs(this.userId).subscribe({
      next: (data: string[]) => {
        const userJobsSent = localStorage.getItem("jobsSentCV");
        console.log(userJobsSent);
        // Store the received data in local storage
        localStorage.setItem('jobsSentCV', JSON.stringify(data));
        // Set the component's userJobsSent variable from local storage
        this.userJobsSent = JSON.parse(localStorage.getItem("jobsSentCV") || "[]");

      },
      error: (error: any) => {
        console.error('Error fetching job count: ', error);
      }
    });
  }
}
