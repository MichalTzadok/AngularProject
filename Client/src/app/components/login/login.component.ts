import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../Services/user.service';
import { User } from '../../Models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  userName: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private userService: UserService, private router: Router) { }

  login(): void {
    if (!this.isValidInput()) {
      this.errorMessage = 'Username and password must be of valid length.';
      return;
    }

    this.userService.getUserFromServer(this.userName, this.password).subscribe({
      next: (user: User) => {
        localStorage.setItem('userId', JSON.stringify(user.id));
        localStorage.setItem('userName', JSON.stringify(user.name));
        localStorage.setItem('CVs', JSON.stringify(user.jobCount));
        console.log(user.jobCount);

        this.router.navigate(['/jobsList']);
      },
      error: (error: any) => {
        localStorage.removeItem('userId');
        localStorage.removeItem('userName');
        localStorage.removeItem('CVs');
        console.error('Authentication failed:', error);
        this.errorMessage = 'Username and password are incorrect';
      }
    });
  }

  isValidInput(): boolean {
    return this.userName.trim().length > 0 && this.password.trim().length >= 8;
  }
}




