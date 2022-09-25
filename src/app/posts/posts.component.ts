import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseComponent } from '../base/base.component';
import { IAlbum } from '../models/album';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent extends BaseComponent implements OnInit {
  postService: PostService = inject(PostService);

  postList$: Observable<IAlbum[]>;

  constructor() {
    super();
    this.postList$ = this.postService.getPosts();
  }

  ngOnInit(): void {}

  trackByFn(index: number, post: IAlbum) {
    return post?.id;
  }
}
