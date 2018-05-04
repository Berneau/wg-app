import { Component, OnInit } from '@angular/core';

import { TitleColorService } from '../_services/title-color.service';
import { UserService } from '../_api/user.service';
import { NotificationService } from '../_services/notification.service';

import { User } from '../_models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor(
    private handle: NotificationService,
    private userService: UserService,
    private titleColorService: TitleColorService
  ) { }

  ngOnInit() {
    this.titleColorService.change('orange');

    this.userService.readAll().subscribe(
      (result) => { this.users = result },
      (error) => { this.handle.log('Can\'t load Users', error); }
    )
  }

}
