import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class ServerResponseService {
  constructor(private http: HttpClient) { }
  public ApiUrl: string = 'https://jsonplaceholder.typicode.com/posts'
  public postDetailsUrl: string = 'https://jsonplaceholder.typicode.com/posts/1/comments'

  getDataList(): Observable<any> {
    return this.http.get(this.ApiUrl);
  }
  getPostDetails(): Observable<any> {
    return this.http.get(this.postDetailsUrl);
  }
   makePutRequest(): Observable<any> {
     console.log('makePutRequest');
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    
    let bodyObj = {
      userId: 1,
      id: 1,
      title: "new title",
      body: "new body"
    };
    
    return this.http
      .put('https://jsonplaceholder.typicode.com/posts/1', JSON.stringify(bodyObj) ) ;
  }
   extractData(res: Response) {
    let body = res.json();
    return body;
  }
}