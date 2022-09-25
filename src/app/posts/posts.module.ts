import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: ':id', component: PostComponent },
];

@NgModule({
  declarations: [PostsComponent, PostComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsModule {}
