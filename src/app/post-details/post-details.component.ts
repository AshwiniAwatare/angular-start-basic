import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServerResponseService } from '../Services/server-response.service';
@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
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




updatePost(){

}
createPost(){

}
cancelPost(){

}
}