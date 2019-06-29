import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServerResponseService } from '../Services/server-response.service';
@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  editable: boolean;
  constructor(public _ServerResponseService: ServerResponseService) { }
  postDetailsResponse = [];

  ngOnInit() {
    this._ServerResponseService.getPostDetails()
      .subscribe(
        data =>
          this.postDetailsResponse =
          data
      )

  }


  updatePost(x) {
    console.log('id', x);
    x.postIds = x.postId;
// https://jsonplaceholder.typicode.com/posts/4
    this.editable = true;
  }
  save(x) {
    x.postId = x.postIds;

    this.editable = false;
  }
  createPost(x) {
    console.log('id', x);
  }
  cancelPost(x) {
    this.editable = false;
  }
}