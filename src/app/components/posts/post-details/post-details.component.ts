import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent implements OnInit {

  item: any = {};
  loaded = false;

  constructor(private route: ActivatedRoute, private postService: PostService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.postService.getPost(params['id']).subscribe(post => {
        this.item = post;
        this.loaded = true;
      });
    });
  }
}
