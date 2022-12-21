import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  getComments(postId: number): Observable<any[]> {
    return this.http.get<any[]>(environment.API_PREFIX + '/comments?postId=' + postId);
  }

}
