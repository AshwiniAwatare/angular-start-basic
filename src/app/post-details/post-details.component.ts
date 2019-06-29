import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServerResponseService } from '../Services/server-response.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  editable: boolean;
  constructor(public _ServerResponseService: ServerResponseService, private route: ActivatedRoute) { }
  commentsDetailsResponse = [];
  postDetailsResponse = [];

  response: any;
  errorMessage: any;
  ngOnInit() {
       const id = this.route.snapshot.paramMap.get('id');
console.log(id)
    // this._ServerResponseService.makeRequest(id);

    this._ServerResponseService.makeRequest(id)
      .subscribe(
        data =>
          this.commentsDetailsResponse = data
      )
       this._ServerResponseService.getPostDetails(id)
      .subscribe(
        data =>
          this.postDetailsResponse = data
      )
      console.log(this.commentsDetailsResponse);

  }


  updatePost(x) {
    console.log('id', x);
    x.postName = x.name;
    x.postBody = x.body;
    // https://jsonplaceholder.typicode.com/posts/4
    x.editable = true;
    this._ServerResponseService
      .makePutRequest(x)
      .subscribe(
        response => this.response = response,
        error => this.errorMessage = <any>error
      );
  }
  save(x) {
    x.name = x.postName;
    x.body = x.postBody;
    x.editable = false;
  }
  cancelPost(x) {
    x.editable = false;
  }

   newAttribute: any = {};

    createPost() {
        this.postDetailsResponse.unshift(this.newAttribute)
        this.newAttribute = {};
        console.log('newdata',this.postDetailsResponse);
    }

   
} 