import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  items: any[] = [];
  comments: any = {};
  searchText = '';
  expandComments: any = {};

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(posts => {
      this.items = posts;
    });
  }

  postDetails(postId: number) {
    this.router.navigate(['post', postId])
  }

  showComments(postId: number) {
    if (this.expandComments[postId]) {
      delete this.expandComments[postId]
    } else {
      this.expandComments[postId] = true;
    }
  }
}
