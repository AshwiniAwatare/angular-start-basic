import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http'

import { AppComponent } from './app.component';
import { ServerResponseService } from './Services/server-response.service';
import { PostDetailsComponent } from './post-details/post-details.component';
import { RoutingModule } from './routing/routing.module';
import { PostsComponent } from './posts/posts.component';
@NgModule({
  imports: [BrowserModule, FormsModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    RoutingModule],
  declarations: [AppComponent, PostDetailsComponent, PostsComponent],
  bootstrap: [AppComponent],
  providers: [ServerResponseService]
})
export class AppModule { }
