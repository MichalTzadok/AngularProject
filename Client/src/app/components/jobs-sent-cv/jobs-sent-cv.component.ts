import { Component } from '@angular/core';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-jobs-sent-cv',
  templateUrl: './jobs-sent-cv.component.html',
  styleUrl: './jobs-sent-cv.component.scss'
})
export class JobsSentCvComponent {
  userJobsSent: any;
  userId: number = -1;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    const userIdString = localStorage.getItem("userId");
    this.userId = parseInt(userIdString!)
    this.userJobsSent = this.userService.jobsSentCVs;
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
  }
}
