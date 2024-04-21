import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError, throwError } from "rxjs";
import { User } from "../Models/User";

@Injectable({
  providedIn: 'root',
})
export class UserService {
  jobsSentCVs: string[] | null = []

  constructor(private http: HttpClient) { }

  getNumOfCVsSent(userId: number) :Observable<number> {
    return this.http.get<number>(`https://localhost:5002/api/Users/${userId}`)

  }
  getJobsSentCVs(userId: number): Observable<string[]> {
    return this.http.get<string[]>(`https://localhost:5002/api/Users/JobsSentCVs/${userId}`);
  }

  updateUser(userId: number, jobName: string): Observable<void> {
    return this.http.put<void>(`https://localhost:5002/api/Users?userId=${userId}&jobName=${jobName}`, null);
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
    );
  }




}

