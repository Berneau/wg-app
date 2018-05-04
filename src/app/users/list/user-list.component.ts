import { Component, Input, Output, EventEmitter } from '@angular/core';

import { User } from '../../_models/user.model';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  @Input() users: User[];

  constructor() { }
}
