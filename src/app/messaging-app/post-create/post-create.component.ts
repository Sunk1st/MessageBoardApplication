import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessagingAppService } from './../messaging-app.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Post } from './../post';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  private mode = 'create';
  private postId: string;
  post: Post;

  constructor(public messagingAppService: MessagingAppService, public route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('postId')) {
        this.mode = 'edit';
        this.postId = paramMap.get('postId');
        this.post = this.messagingAppService.getPost(this.postId);
      } else {
        this.mode = 'create';
        this.postId = null;
      }
    });
  }

  onSavePost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    if (this.mode === 'create') {
      this.messagingAppService.addPost(form.value.title, form.value.content);
    } else {
      this.messagingAppService.updatePost(this.postId, form.value.title, form.value.content)
    }
    form.resetForm();
  }

}
