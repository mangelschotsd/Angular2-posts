import { Component, Output, EventEmitter } from '@angular/core';
import { Post } from './post';
import { Comment } from './comment';

import { PostService } from './post.service';

@Component({
   selector: 'post-list',
   templateUrl: './post-list.component.html'
})

export class PostListComponent  {
   posts: Post[];

   @Output() commentsFound = new EventEmitter();

   constructor(private postService: PostService) {}

   ngOnInit(): void {
     this.postService.getAllPosts().subscribe(data => this.posts = data);
   }

   getComments(index: number): void {
     this.postService.getCommentsForPost(index).subscribe(data => this.posts = data);
   }

   printComments(comments: Comment[]): void {
     for c in comments {
       console.log(c['name']);
     }
   }
}
