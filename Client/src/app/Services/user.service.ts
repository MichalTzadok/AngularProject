import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError, throwError } from "rxjs";
import { User } from "../Models/User";

@Injectable({
  providedIn: 'root',
})
export class UserService {
  jobsSentCVs: string[] | null = []//  - Initializes an array `jobsSentCVs` to keep track of jobs where a CV has been sent.

  constructor(private http: HttpClient) { }
  //Fetches the total number of CVs sent by a user.
  // - Sends an HTTP GET request to the endpoint with the user ID.
  getNumOfCVsSent(userId: number): Observable<number> {
    return this.http.get<number>(`https://localhost:5002/api/Users/${userId}`)

  }


  //Retrieves the list of job names where the user has sent CVs.
  // - Sends an HTTP GET request with the user ID to the backend.
  getJobsSentCVs(userId: number): Observable<string[]> {
    return this.http.get<string[]>(`https://localhost:5002/api/Users/JobsSentCVs/${userId}`);
  }


  //Updates the user information to reflect a job application.
  // - Sends an HTTP PUT request with the user ID and job name to update the user's record.
  updateUser(userId: number, jobName: string): Observable<void> {
    return this.http.put<void>(`https://localhost:5002/api/Users?userId=${userId}&jobName=${jobName}`, null);
  }

  // Fetches user information based on the provided username and password.
  // - Includes error handling with `catchError` to alert if the user is not found or if other errors occur.
  // - Returns an observable of `User`.
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
    );
  }




}

