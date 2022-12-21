import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(environment.API_PREFIX + '/posts');
  }

  getPost(postId: number): Observable<any> {
    return this.http.get<any[]>(environment.API_PREFIX + '/posts/' + postId);
  }
}
