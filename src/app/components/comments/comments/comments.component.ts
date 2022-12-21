import { Component, Input, OnInit } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @Input() postId: any;
  comments: any[] = [];
  expandComments: any = {};

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    if (this.expandComments[this.postId]) {
      delete this.expandComments[this.postId]
      this.comments = [];
    } else {
      this.expandComments[this.postId] = true;
      this.commentService.getComments(this.postId).subscribe(comments => {
        this.comments = comments;
      });
    }
  }

}
