import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError, throwError } from "rxjs";
import { User } from "../Models/User";

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // private userName?: string | null = null
  // private userPassword?: string | null = null
  jobsSentCVs: string[] | null = []

  constructor(private http: HttpClient) { }

  // getUserName(): string | null {
  //   if (!this.userName)
  //     this.userName = localStorage.getItem('userName')
  //   return this.userName
  // }

  // setUserName(userName: string) {
  //   this.userName = userName
  //   localStorage.setItem('userName', this.userName)
  // }

  // getUserPassword(): string | null {
  //   if (!this.userPassword)
  //     this.userPassword = localStorage.getItem('userPassword')
  //   return this.userPassword
  // }


  // setUserPassword(userPassword: string) {
  //   this.userPassword = userPassword
  //   localStorage.setItem('userPassword', this.userPassword)
  // }
  getNumOfCVsSent(userId: number) {
    return this.http.get<number>(`https://localhost:5002/api/Users/${userId}`)

  }
  updateUser(userId: number) {
    return this.http.put(`https://localhost:5002/api/Users?userId=${userId}`, null)

  }
  getUserFromServer(name: string, password: string): Observable<User> {
    return this.http.get<User>(`https://localhost:5002/api/Users/${name}/${password}`).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
          alert('User not found');
        } else {
          alert('An error occurred');
        }
        return throwError(() => new Error('Error'));
      })
    );;
  }




}

