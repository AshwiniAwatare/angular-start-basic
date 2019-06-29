import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServerResponseService } from '../Services/server-response.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  constructor(public _ServerResponseService: ServerResponseService) { }
  dataListResponse = [];

  ngOnInit() {
    this._ServerResponseService.getDataList()
      .subscribe(
        data =>
          this.dataListResponse =
          data
      )
}

  channelForm: boolean = false;
  channelListing: boolean = false;

  private newFunction() {
    return this.dataListResponse;
  }

  saveChannel(channelName, channelNumber) {
    // this.channelList.unshift({ 'name': channelName, 'number': channelNumber })
  }
  DeletedChannelNo: number;

  goTOParentComponentListenMyVOice(outputHere) {
    this.DeletedChannelNo = outputHere;
  }


}