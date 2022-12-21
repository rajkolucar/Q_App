import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(userId: number): Observable<any> {
    return this.http.get<any[]>(environment.API_PREFIX + '/users/' + userId);
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(environment.API_PREFIX + '/users');
  }

  getUserPosts(userId: number): Observable<any[]> {
    return this.http.get<any[]>(environment.API_PREFIX + '/users/' + userId + '/posts')
  }

}
