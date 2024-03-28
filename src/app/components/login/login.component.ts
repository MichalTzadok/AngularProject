import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from '../../Services/job.service';
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

constructor(private userService: UserService, private router: Router) {}

login(): void {
  // בדיקת תקינות הקלט
  if (!this.isValidInput()) {
    this.errorMessage = 'Username and password must be of valid length.';
    return;
  }
  this.userService.setUserName(this.userName);
  this.userService.setUserPassword(this.password);

  // בדיקת אימות המשתמש בשרת
  this.userService.getUserFromServer(this.userName, this.password).subscribe({
    next: (user: User) => {
      localStorage.setItem('currentUser', JSON.stringify(user));
      window.location.reload();

      // localStorage.setItem('currentUser', JSON.stringify({ username: this.userName }));
      this.router.navigate(['/jobsList']);


    },
    error: (error) => { 
      localStorage.removeItem('userName');
      localStorage.removeItem('userPassword');
      localStorage.removeItem('currentUser');
      localStorage.setItem("currentUser",JSON.stringify(null))
      console.error('not found');
      this.errorMessage = 'Username and password are incorrect';

    }
  });

}
// בדיקת תקינות הקלט
isValidInput(): boolean {
  return this.userName.trim().length > 0 && this.password.trim().length >= 8;
}

}