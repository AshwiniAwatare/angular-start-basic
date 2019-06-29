import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class ServerResponseService {
constructor(private http: HttpClient) { }
   public ApiUrl: string = 'https://jsonplaceholder.typicode.com/posts'
    public postDetailsUrl: string = 'https://jsonplaceholder.typicode.com/posts/1/comments'
  
  getDataList():Observable<any> {
    return this.http.get(this.ApiUrl);
  } 
    getPostDetails():Observable<any> {
    return this.http.get(this.postDetailsUrl);
  } 
}