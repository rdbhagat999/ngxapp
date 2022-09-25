import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AgVirtualScrollModule } from 'ag-virtual-scroll';

import { PostsComponent } from './posts.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  { path: '', component: PostsComponent },
  // { path: ':id', component: PostComponent },
];

@NgModule({
  declarations: [PostsComponent, PostComponent],
  imports: [CommonModule, AgVirtualScrollModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsModule {}
