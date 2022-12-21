import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  @Input() userId: any;
  @Output() userData: any = new EventEmitter();
  user: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser(this.userId).subscribe(user => {
      this.user = user;
      this.userData.emit(user);
    });
  }
}
