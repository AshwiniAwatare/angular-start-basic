import { Injectable } from '@angular/core';
import { HttpClient ,HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class ServerResponseService {
  constructor(private http: HttpClient) { }
 
   getDataList(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  getPostDetails(postId): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/'+postId);
  }
   makeRequest(postId): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/'+postId+'/comments');
  }
   
   makePutRequest(x): Observable<any> {
     console.log('makePutRequest');
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    
    let bodyObj = {
      userId: x.userId,
      id: x.id,
      title: x.title,
      body: x.body
    };
    
    return this.http.put('https://jsonplaceholder.typicode.com/posts/1', JSON.stringify(bodyObj) ) ;
  }
  createPostRequest(bodyObj): Observable<any> {
  
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
     
    
    return this.http
      .post('https://jsonplaceholder.typicode.com/posts', JSON.stringify(bodyObj) ) ;
  }
   extractData(res: Response) {
    let body = res.json();
    return body;
  }
}