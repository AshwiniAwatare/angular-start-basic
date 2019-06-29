import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostDetailsComponent } from '../post-details/post-details.component';
import { PostsComponent } from '../posts/posts.component';
const routes: Routes = [
  {
    path: 'postDetails/:id',
    component: PostDetailsComponent
  },
  {
    path: 'post',
    component: PostsComponent
  },
  {
    path: '',
    component: PostsComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class RoutingModule { }