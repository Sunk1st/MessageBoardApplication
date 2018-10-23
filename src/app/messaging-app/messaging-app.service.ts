import { Post } from './post';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessagingAppService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post []>();

  constructor(private http: HttpClient) {}

  getPosts() {
    this.http
      .get<{id: string, message: string, posts: any}>(
        'http://localhost:8080/api/posts'
      )
      .pipe(map((postData) => {
        console.log(postData);
        return postData.posts.map(post => {
          return {
            title: post.title,
            content: post.content,
            id: post._id
          };
        });
      }))
      .subscribe((transformedPosts) => {
        this.posts = transformedPosts;
        this.postsUpdated.next([...this.posts]);
      });
  }

  getPost(id: string) {
    return {...this.posts.find(p => p.id === id)};
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    const post: Post = {id: null, title: title, content: content};
    this.http.post<{ message: string, postId: string}>('http://localhost:8080/api/posts', post)
      .subscribe((response) => {
        post.id = response.postId;
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
      });
  }
  deletePost(postId: string) {
    this.http.delete('http://localhost:8080/api/posts/' + postId)
      .subscribe(() => {
        const updatedPosts = this.posts.filter(post => post.id !== postId);
        this.posts = updatedPosts;
        this.postsUpdated.next([...this.posts]);
      });
  }

  updatePost(id: string, title: string, content: string) {
    const post: Post = {id: id, title: title, content: content};
    this.http.put('http://localhost:8080/api/posts/' + id, post)
      .subscribe(response => {
        console.log(response);
      });
  }
}
