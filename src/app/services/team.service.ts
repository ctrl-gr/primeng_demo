import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";
import {User} from "../entity/user";

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private teamUrl = 'http://localhost:3000/acmilan';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.teamUrl, this.httpOptions)
      .pipe(
        catchError(this.handleError<User[]>('all', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

}
