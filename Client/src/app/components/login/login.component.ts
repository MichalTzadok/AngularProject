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
  // Holds the user's input for the login form
  userName: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private userService: UserService, private router: Router) { }
  // Attempts to authenticate the user with the provided credentials.
  // If the input is invalid, displays an error message.
  // On successful authentication, saves user data to local storage and navigates to the job list.
  // If authentication fails, clears local storage and displays an error message.
  // 
  login(): void {
    if (!this.isValidInput()) {
      this.errorMessage = 'Username and password must be of valid length.';
      return;// If input is invalid, set an error message and stop further execution
    }
    // Send a request to authenticate the user
    this.userService.getUserFromServer(this.userName, this.password).subscribe({
      next: (user: User) => {
         // Store user data in local storage
        localStorage.setItem('userId', JSON.stringify(user.id));
        localStorage.setItem('userName', JSON.stringify(user.name));
        localStorage.setItem('CVs', JSON.stringify(user.jobCount));
        localStorage.setItem('jobsSentCV', JSON.stringify(user.jobsSentCV));
        localStorage.setItem('searchJobField',JSON.stringify(user.searchJobField?.trim()) || '""'.replace(/"/g, ''));
        // Navigate to the job list on successful login
        this.router.navigate(['/jobsList']);
      },
      error: (error: any) => {
        // Clear local storage and set error message on authentication failure
       localStorage.clear();
        console.error('Authentication failed:', error);
        this.errorMessage = 'Username and password are incorrect';
      }
    });
  }
  // Validates user input for the login form.
  //  Checks that the username is not empty and the password has at least 8 characters.
  isValidInput(): boolean {
    return this.userName.trim().length > 0 && this.password.trim().length >= 8;
  }
}




