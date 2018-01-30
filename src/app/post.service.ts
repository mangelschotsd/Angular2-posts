import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';

import { Post } from './post';
import { Comment } from './comment';

@Injectable()
export class PostService {

   private postsURI: string = 'http://jsonplaceholder.typicode.com/posts';


   constructor(private http: HttpClient) {}

   // get all posts
   getAllPosts(): Observable<Post[]> {
     let url = `${this.postsURI}`;

     return this.http.get<Post[]>(url);
   }

   // get comments based on the index
   getCommentsForPost(index: number): Observable<Comment[]> {
     let url = 'http://jsonplaceholder.typicode.com/post/' + number + '/comments';

     return this.http.get<Comment[]>(url);

  }
}
